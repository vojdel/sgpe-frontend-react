import { useState, useEffect } from 'react'
import { SeccionSchema } from './SeccionSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'
import { getAll, getOne, create, update } from '../../services/service.js'
import { getAllGrados } from '../../services/cbbx'
import PropTypes from 'prop-types'

/**
 * FormSeccion.
 * @returns Modal de Seccion
 */
const FormSeccion = ({ id, setRegistro, changeId }) => {
  const initialSeccion = {
    id: 0,
    secciones: '',
    grado: 0
  }

  const initialError = {
    id: '',
    secciones: '',
    grado: ''
  }

  const [seccion, setSeccion] = useState(initialSeccion)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)
  const [grados, setGrados] = useState([])

  useEffect(() => {
    getAllGrados().then(response => {
      console.log(response.data)
      setGrados(response.data)
    })
  }, [])

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'seccion').then(data => {
        setSeccion({
          id: data.id,
          secciones: data.secciones,
          grado: data.grado
        })
        setValido(true)
      })
    }
  }, [id])

  /**
  * Manejar input seccion
  * @param {any} event
  * */
  const handleChange = ({ target }) => {
    const { name, value, classList } = target
    setSeccion({
      ...seccion,
      [name]: value
    })
    validaciones(SeccionSchema[name], name, value, errors, setErrors, classList)
    console.log(seccion)
  }

  const clean = () => {
    cleanForm(setSeccion, initialSeccion, setErrors, initialError, ['secciones', 'grado'])
    changeId(0)
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
      create('seccion', {
        grado: seccion.grado,
        seccion: seccion.secciones
      }).then(data => {
        clean()
        console.log(data)
        getAll('seccion').then(({ data }) => {
          setRegistro(data)
        }).finally(() => {
          setValido(false)
        })
      })
    } else {
      update(id, 'seccion', {
        grado: seccion.grado,
        seccion: seccion.secciones
      }).then(data => {
        clean()
        console.log(data)
        getAll('seccion').then(({ data }) => {
          setRegistro(data)
        })
      }).finally(() => {
        setValido(false)
      })
    }
  }

  useEffect(() => {
    const validacion = esValido(['secciones', 'grado'], errors)
    setValido(validacion)
  }, [errors])

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
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Grado:</label>
                <select className="form-control" id="exampleFormControlSelect2" name="grado" onChange={handleChange} value={seccion.grado}>
                  <option value="0">Seleccione un Grado...</option>
                  {
                    grados.map((grado, index) => {
                      return (<option value={grado.id} key={index}>{grado.grados}</option>)
                    })
                  }
                </select>
                {errors.grado ? <div className="invalid-feedback">{errors.grado}</div> : null}
              </div>
              <label>Seccion</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el seccion aqui..." aria-label="Seccion" aria-describedby="seccion-addon" name="secciones" onChange={handleChange} value={seccion.secciones} />
                {errors.secciones ? <div className="text-danger">{errors.secciones}</div> : null}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            {(valido)
              ? <button type="button" className="btn bg-gradient-info" onClick={handleSubmit}>
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

FormSeccion.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}
export default FormSeccion
