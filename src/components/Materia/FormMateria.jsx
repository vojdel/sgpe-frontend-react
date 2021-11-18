import { useState, useEffect } from 'react'
import { MateriaSchema } from './MateriaSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'
import { getOne, create, update } from '../../services/service.js'
import PropTypes from 'prop-types'
/**
 * FormMateria.
 * @returns Modal de Materia
 */
const FormMateria = ({ id, setRegistro, changeId }) => {
  const initialMateria = {
    id: 0,
    materia: ''
  }
  const initialError = {
    id: '',
    materia: ''
  }

  const [materia, setMateria] = useState(initialMateria)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'materia').then(data => {
        setMateria({
          id: data.id,
          materia: data.nombre
        })
        setValido(true)
      })
    }
  }, [id])

  useEffect(() => {
    const validacion = esValido(['materia'], errors)
    setValido(validacion)
  }, [errors])

  /**
    * Manejar input materia
    * @param {any} event
    * */
  const handleChange = ({ target }) => {
    const { name, value, classList } = target
    setMateria({
      ...materia,
      [name]: value
    })
    validaciones(MateriaSchema, name, value, errors, setErrors, classList)
  }

  const clean = () => {
    cleanForm(setMateria, initialMateria, setErrors, initialError, ['materia'])
    changeId()
    setTimeout(() => {
      setValido(false)
    }, 1000)
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (id === 0) {
      create('materia', {
        materia: materia.materia
      }).then(data => {
        clean()
        console.log(data)
        setRegistro()
        setValido(false)
      })
    } else {
      update(id, 'materia', {
        materia: materia.materia
      }).then(data => {
        clean()
        console.log(data)
        setRegistro()
        setValido(false)
      })
    }
  }

  useEffect(() => {
    const validacion = esValido(['materia'], errors)
    setValido(validacion)
  }, [errors])

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
                <input type="text" className="form-control" placeholder="Escribe la materia aqui..." aria-label="Materia" aria-describedby="materia-addon" name="materia" onChange={handleChange} value={materia.materia} />
                {errors.materia ? <div className="invalid-feedback">{errors.materia}</div> : null}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            {(valido)
              ? <button type="submit" className="btn bg-gradient-info" onClick={handleSubmit}>
                {(id === 0) ? 'Registrar' : 'Editar'}
              </button>
              : <button type="button" className="btn bg-gradient-info" disabled>
                {(id === 0) ? 'Registrar' : 'Editar'}
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

FormMateria.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default FormMateria
