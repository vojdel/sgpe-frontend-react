import { useState, useEffect } from 'react'
import { SeccionSchema } from './SeccionSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'

/**
 * FormSeccion.
 * @returns Modal de Seccion
 */
const FormSeccion = () => {
  const initialSeccion = {
    id: 0,
    seccion: ''
  }

  const initialError = {
    esValido: false,
    id: '',
    seccion: ''
  }

  const [seccion, setSeccion] = useState(initialSeccion)
  const [errors, setErrors] = useState(initialError)

  useEffect(() => {
    setErrors({
      ...errors,
      esValido: esValido(SeccionSchema, seccion)
    })
  }, [seccion])

  /**
    * Manejar input seccion
    * @param {any} event
    * */
  const handleSeccion = (event) => {
    setSeccion({
      ...seccion,
      seccion: event.target.value
    })
    validaciones(SeccionSchema, event.target.name, event.target.value, errors, setErrors, event.target.classList)
  }

  const clean = () => {
    cleanForm(setSeccion, initialSeccion, setErrors, initialError, ['seccion'])
  }

  /**
    * Manejar input seccion
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    cleanForm(setSeccion, initialSeccion, setErrors, initialError, ['seccion'])
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Seccion</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Seccion</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el seccion aqui..." aria-label="Seccion" aria-describedby="seccion-addon" name="seccion" onChange={handleSeccion} value={seccion.seccion} />
              {errors.seccion ? <div className="text-danger">{errors.seccion}</div> : null}
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
export default FormSeccion
