import { useState, useEffect } from 'react'
import { MateriaSchema } from './MateriaSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'
/**
 * FormMateria.
 * @returns Modal de Materia
 */
const FormMateria = () => {
  const initialMateria = {
    id: 0,
    materia: ''
  }
  const initialError = {
    esValido: false,
    id: '',
    materia: ''
  }

  const [materia, setMateria] = useState(initialMateria)
  const [errors, setErrors] = useState(initialError)

  useEffect(() => {
    esValido(MateriaSchema, materia, errors, setErrors)
  }, [materia])

  /**
    * Manejar input materia
    * @param {any} event
    * */
  const handleMateria = (event) => {
    setMateria({
      ...materia,
      [event.target.name]: event.target.value
    })
    validaciones(MateriaSchema, event.target.name, event.target.value, errors, setErrors, event.target.classList)
  }

  const clean = () => {
    cleanForm(setMateria, initialMateria, setErrors, initialError, ['materia'])
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    cleanForm(setMateria, initialMateria, setErrors, initialError, ['materia'])
    console.log(materia)
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Materia</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Materia</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe la materia aqui..." aria-label="Materia" aria-describedby="materia-addon" name="materia" onChange={handleMateria} value={materia.materia} />
                {errors.municipio ? <div className="invalid-feedback">{errors.materia}</div> : null}
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
export default FormMateria
