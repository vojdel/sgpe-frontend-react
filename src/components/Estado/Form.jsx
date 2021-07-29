import { useState, useEffect } from 'react'
import { EstadoSchema } from './EstadoSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'

/**
 * Form.
 * @returns Modal de Estado
 */
const Form = () => {
  const initialEstado = {
    id: 0,
    estado: ''
  }

  const initialError = {
    esValido: false,
    id: '',
    estado: ''
  }

  const [estado, setEstado] = useState(initialEstado)
  const [errors, setErrors] = useState(initialError)

  useEffect(() => {
    setErrors({
      ...errors,
      esValido: esValido(EstadoSchema, estado)
    })
  }, [estado])

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleEstado = (event) => {
    event.preventDefault()
    setEstado({
      ...estado,
      estado: event.target.value
    })
    validaciones(EstadoSchema, event.target.name, event.target.value, errors, setErrors, event.target.classList)
  }

  const clean = () => {
    cleanForm(setEstado, initialEstado, setErrors, initialError, ['estado'])
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    cleanForm(setEstado, initialEstado, setErrors, initialError, ['estado'])
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Estado</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Estado</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el estado aqui..." aria-label="Estado" aria-describedby="estado-addon" name="estado" onChange={handleEstado} value={estado.estado} />
              </div>
              {errors.estado ? <div className="text-danger">{errors.estado}</div> : null}
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
export default Form
