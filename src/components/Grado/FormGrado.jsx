import { useState, useEffect } from 'react'
import { GradoSchema } from './GradoSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'
import { getOne, create, update } from '../../services/service.js'
import PropTypes from 'prop-types'
import toast from 'react-hot-toast'

/**
 * FormGrado.
 * @returns Modal de Grado
 */
const FormGrado = ({ id, setRegistro, changeId }) => {
  const initialGrado = {
    id: 0,
    grados: ''
  }

  const initialError = {
    id: '',
    grados: ''
  }

  const [grado, setGrado] = useState(initialGrado)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'grado').then(data => {
        setGrado(data)
        setValido(true)
      })
    }
  }, [id])

  /**
    * Manejar input grado
    * @param {any} event
    * */

  const handleGrado = (event) => {
    setGrado({
      ...grado,
      grados: event.target.value
    })
    validaciones(GradoSchema[event.target.name], event.target.name, event.target.value, errors, setErrors, event.target.classList)
  }

  const clean = () => {
    cleanForm(setGrado, initialGrado, setErrors, initialError, ['grados'])
    changeId()
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (id === 0) {
      create('grado', {
        grado: grado.grados
      }).then(data => {
        toast.success('Se creó el registro: ' + grado.grados)
        clean()
        setRegistro()
        setValido(false)
      })
    } else {
      update(id, 'grado', {
        grado: grado.grados
      }).then(data => {
        toast.success('Se modificó el registro ' + grado.grados)
        clean()
        console.log(data)
        setRegistro()
        setValido(false)
      })
    }
  }

  useEffect(() => {
    const validacion = esValido(['grados'], errors)
    setValido(validacion)
  }, [errors])

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
                <input type="text" className="form-control" placeholder="Escribe el grado aqui..." aria-label="Grado" aria-describedby="grado-addon" name="grados" onChange={handleGrado} value={grado.grados} />
                {errors.grados ? <div className="text-danger">{errors.grados}</div> : null}
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

FormGrado.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default FormGrado
