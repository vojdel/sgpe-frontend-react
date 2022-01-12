import { useState, useEffect } from 'react'
import { OcupacionLaboralSchema } from './OcupacionLaboralSchema'
import { validaciones, cleanForm } from '../../util/validations.js'
import PropTypes from 'prop-types'
import { getOne, create, update } from '../../services/service.js'
import toast from 'react-hot-toast'

/**
 * Form.
 * @returns Modal de OcupacionLaboral
 */
const Form = ({ id, setRegistro, changeId }) => {
  const initialOcupacionLaboral = {
    labor: ''
  }

  const initialError = {
    labor: ''
  }

  const [ocupacionLaboral, setOcupacionLaboral] = useState(initialOcupacionLaboral)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'ocupacionlaboral').then(data => {
        setOcupacionLaboral(data)
        setValido(true)
      })
    }
  }, [id])

  /**
    * Manejar input ocupacionlaboral
    * @param {any} event
    * */
  const handleOcupacionLaboral = ({ target }) => {
    const { name, value, classList } = target
    setOcupacionLaboral({
      ...ocupacionLaboral,
      [name]: value
    })
    validaciones(OcupacionLaboralSchema, name, value, errors, setErrors, classList)
  }

  const clean = () => {
    cleanForm(setOcupacionLaboral, initialOcupacionLaboral, setErrors, initialError, ['labor'])
    changeId()
  }

  /**
    * Manejar input ocupacionlaboral
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (id === 0) {
      create('ocupacionlaboral', {
        labor: ocupacionLaboral.labor
      }).then(data => {
        toast.success('Se creó el registro: ' + ocupacionLaboral.labor)
        clean()
        setRegistro()
        setValido(false)
      })
    } else {
      update(id, 'ocupacionlaboral', {
        labor: ocupacionLaboral.labor
      }).then(data => {
        toast.success('Se modificó el registro: ' + ocupacionLaboral.labor)
        clean()
        setRegistro()
        setValido(false)
      })
    }
  }

  const handleErrors = async () => {
    const validacion = await OcupacionLaboralSchema.isValid(ocupacionLaboral.labor)
    setValido(validacion)
  }

  useEffect(() => {
    handleErrors()
  }, [errors])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Ocupación Laboral</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Ocupación Laboral</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el labor aqui..." aria-label="OcupacionLaboral" aria-describedby="labor-addon" name="labor" onChange={handleOcupacionLaboral} value={ocupacionLaboral.labor} />
              </div>
              {errors.labor ? <div className="text-danger">{errors.labor}</div> : null}
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            {(valido)
              ? <button type="button" className="btn bg-gradient-info" onClick={handleSubmit}>Registrar</button>
              : <button type="button" className="btn bg-gradient-info" disabled>Registrar</button>
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
