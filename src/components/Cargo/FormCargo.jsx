import { useState, useEffect } from 'react'
import { CargoSchema } from './CargoSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'

/**
 * FormCargo.
 * @returns Modal de Cargo
 */
const FormCargo = () => {
  const initialCargo = {
    id: 0,
    cargo: ''
  }

  const initialError = {
    esValido: false,
    id: '',
    cargo: ''
  }

  const [cargo, setCargo] = useState(initialCargo)
  const [errors, setErrors] = useState(initialError)

  useEffect(() => {
    setErrors({
      ...errors,
      esValido: esValido(CargoSchema, cargo)
    })
  }, [cargo])
  /**
    * Manejar input cargo
    * @param {any} event
    * */
  const handleCargo = (event) => {
    setCargo({
      ...cargo,
      cargo: event.target.value
    })
    validaciones(CargoSchema, event.target.name, event.target.value, errors, setErrors, event.target.classList)
  }

  const clean = () => {
    cleanForm(setCargo, initialCargo, setErrors, initialError, ['cargo'])
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    cleanForm(setCargo, initialCargo, setErrors, initialError, ['cargo'])
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Cargo</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Cargo</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el cargo aqui..." aria-label="Cargo" aria-describedby="cargo-addon" name="cargo" onChange={handleCargo} value={cargo.cargo} />
                {(errors.cargo) ? <div className="invalid-feedback">{errors.cargo}</div> : null}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            {(errors.esValido)
              ? <button type="submit" className="btn bg-gradient-info" onClick={handleSubmit}>Registrar</button>
              : <button type="button" className="btn bg-gradient-info" disabled>Registrar</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default FormCargo
