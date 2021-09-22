import { useState, useEffect } from 'react'
import { MunicipioSchema } from './MunicipioSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'
import PropTypes from 'prop-types'
import { getAll, getOne, create, update } from '../../services/service.js'
import { getAllEstado } from '../../services/cbbx'

const Form = ({ id, setRegistro, changeId }) => {
  const initialMunicipio = {
    id: 0,
    state_id: 0,
    municipalitys: ''
  }
  const initialError = {
    id: '',
    state_id: '',
    municipalitys: ''
  }

  const [municipio, setMunicipio] = useState(initialMunicipio)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)
  const [estados, setEstados] = useState([])

  useEffect(() => {
    getAllEstado().then(response => {
      console.log(response.data)
      setEstados(response.data)
    })
  }, [])

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'municipio').then(data => setMunicipio(data[0]))
    }
  }, [id])

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleChange = (event) => {
    setMunicipio({
      ...municipio,
      [event.target.name]: event.target.value
    })
    validaciones(MunicipioSchema[event.target.name], event.target.name, event.target.value, errors, setErrors, event.target.classList)
    console.log(errors)
  }

  const clean = () => {
    cleanForm(setMunicipio, initialMunicipio, setErrors, initialError, ['state_id', 'municipalitys'])
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
      create('municipio', {
        estado_id: municipio.state_id,
        municipio: municipio.municipalitys
      }).then(response => {
        clean()
        console.log(response)
        getAll('municipio').then(response => {
          console.log(response.data)
          setRegistro(response.data)
        }).finally(() => {
          setValido(false)
        })
      })
    } else {
      update(id, 'municipio', {
        estado_id: municipio.state_id,
        municipio: municipio.municipalitys
      }).then(response => {
        clean()
        console.log(response)
        getAll('municipio').then(response => {
          setRegistro(response.data)
        })
      }).finally(() => {
        setValido(false)
      })
    }
  }

  useEffect(() => {
    const validacion = esValido(['state_id', 'municipalitys'], errors)
    setValido(validacion)
  }, [errors])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Municipio</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Estado:</label>
                <select className="form-control" id="exampleFormControlSelect2" name="state_id" onChange={handleChange} value={municipio.state_id}>
                  <option value="0">Seleccione un Estado...</option>
                  {
                    estados.map((estado, index) => {
                      return (<option value={estado.id} key={index}>{estado.states}</option>)
                    })
                  }
                </select>
                {errors.state_id ? <div className="invalid-feedback">{errors.state_id}</div> : null}
              </div>
              <label>Municipio</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el municipio aqui..." aria-label="Municipio" aria-describedby="municipalitys-addon" name="municipalitys" onChange={handleChange} value={municipio.municipalitys} />
                {errors.municipalitys ? <div className="invalid-feedback">{errors.municipalitys}</div> : null}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            {(valido)
              ? <button type="submit" className="btn bg-gradient-info" onClick={handleSubmit}>Registrar</button>
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
