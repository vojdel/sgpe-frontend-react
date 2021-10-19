import { useState, useEffect } from 'react'
import { EstadoSchema } from './EstadoSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'
import PropTypes from 'prop-types'
import { getAll, getOne, create, update } from '../../services/service.js'

/**
 * Form.
 * @returns Modal de Estado
 */
const Form = ({ id, setRegistro, changeId }) => {
  const initialEstado = {
    id: 0,
    states: ''
  }

  const initialError = {
    id: '',
    states: ''
  }

  const [estado, setEstado] = useState(initialEstado)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'estado').then(data => {
        setEstado(data)
        setValido(true)
      })
    }
  }, [id])

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleEstado = (event) => {
    event.preventDefault()
    setEstado({
      ...estado,
      [event.target.name]: event.target.value
    })
    validaciones(EstadoSchema[event.target.name], event.target.name, event.target.value, errors, setErrors, event.target.classList)
    console.log(errors)
  }

  const clean = () => {
    cleanForm(setEstado, initialEstado, setErrors, initialError, ['states'])
    changeId(0)
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (id === 0) {
      create('estado', {
        estado: estado.states
      }).then(data => {
        clean()
        console.log(data)
        getAll('estado').then(({ data }) => {
          setRegistro(data)
        }).finally(() => {
          setValido(false)
        })
      })
    } else {
      update(id, 'estado', {
        estado: estado.states
      }).then(data => {
        clean()
        console.log(data)
        getAll('estado').then(({ data }) => {
          setRegistro(data)
        })
      }).finally(() => {
        setValido(false)
      })
    }
  }

  useEffect(() => {
    const validacion = esValido(['states'], errors)
    setValido(validacion)
  }, [errors])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                <input type="text" className="form-control" placeholder="Escribe el states aqui..." aria-label="Estado" aria-describedby="states-addon" name="states" onChange={handleEstado} value={estado.states} />
              </div>
              {errors.states ? <div className="text-danger">{errors.states}</div> : null}
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

Form.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default Form
