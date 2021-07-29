import { useState, useEffect } from 'react'
import { GradoSchema } from './GradoSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'

/**
 * FormGrado.
 * @returns Modal de Grado
 */
const FormGrado = () => {
  const initialGrado = {
    id: 0,
    grado: ''
  }

  const initialError = {
    esValido: false,
    id: '',
    grado: ''
  }

  const [grado, setGrado] = useState(initialGrado)
  const [errors, setErrors] = useState(initialError)

  useEffect(() => {
    setErrors({
      ...errors,
      esValido: esValido(GradoSchema, grado)
    })
  }, [grado])

  /**
    * Manejar input grado
    * @param {any} event
    * */

  const handleGrado = (event) => {
    setGrado({
      ...grado,
      grado: event.target.value
    })
    validaciones(GradoSchema, event.target.name, event.target.value, errors, setErrors, event.target.classList)
  }

  const clean = () => {
    cleanForm(setGrado, initialGrado, setErrors, initialError, ['grado'])
  }

  /**
    * Manejar input grado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    cleanForm(setGrado, initialGrado, setErrors, initialError, ['grado'])
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Grado</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Grado</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el grado aqui..." aria-label="Grado" aria-describedby="grado-addon" name="cargo" onChange={handleGrado} value={grado.grado} />
                {errors.cargo ? <div className="text-danger">{errors.cargo}</div> : null}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            {(errors.esValido)
              ? <button type="button" className="btn bg-gradient-info" onClick={handleSubmit}>Registrar</button>
              : <button type="button" className="btn bg-gradient-info" disabled>Registrar</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default FormGrado
