import { useState, useEffect } from 'react'
import { CargoSchema } from './CargoSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'
import { getOne, create, update } from '../../services/service.js'
import PropTypes from 'prop-types'
import toast from 'react-hot-toast'

/**
 * FormCargo.
 * @returns Modal de Cargo
 */
const FormCargo = ({ id, setRegistro, changeId }) => {
  const initialCargo = {
    id: 0,
    cargos: ''
  }

  const initialError = {
    id: '',
    cargos: ''
  }

  const [cargo, setCargo] = useState(initialCargo)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'cargo').then(data => {
        setCargo({
          id: data.id,
          cargos: data.cargos
        })
        setValido(true)
      })
    }
  }, [id])

  /**
    * Manejar input cargo
    * @param {any} event
    * */
  const handleChange = ({ target }) => {
    const { name, value, classList } = target
    setCargo({
      ...cargo,
      [name]: value
    })
    validaciones(CargoSchema, name, value, errors, setErrors, classList)
  }

  const clean = () => {
    cleanForm(setCargo, initialCargo, setErrors, initialError, ['cargos'])
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
      create('cargo', {
        cargo: cargo.cargos
      }).then(data => {
        toast.success('Se creó el registro: ' + cargo.cargos)
        clean()
        setRegistro()
        setValido(false)
      })
    } else {
      update(id, 'cargo', {
        cargo: cargo.cargos
      }).then(data => {
        toast.success('Se modificó el registro: ' + cargo.cargos)
        clean()
        setRegistro()
        setValido(false)
      })
    }
  }

  useEffect(() => {
    const validacion = esValido(['cargos'], errors)
    setValido(validacion)
  }, [errors])

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
                <input type="text" className="form-control" placeholder="Escribe el cargo aqui..." aria-label="Cargo" aria-describedby="cargo-addon" name="cargos" onChange={handleChange} value={cargo.cargos} />
                {(errors.cargos) ? <div className="invalid-feedback">{errors.cargos}</div> : null}
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

FormCargo.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default FormCargo
