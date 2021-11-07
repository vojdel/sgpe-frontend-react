import { useState, useEffect } from 'react'
import { RepresentanteSchema } from './RepresentanteSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'
import PropTypes from 'prop-types'
import { getOne, create, update } from '../../services/service.js'
import { getAllEstado, getAllMunicpios, getAllOcupaciones } from '../../services/cbbx'

/**
 * FormRepresentante.
 * @returns Modal de Representante
 */
const FormRepresentante = ({ id, setRegistro, changeId }) => {
  const initialRepresentante = {
    id: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    sex: 'Masculino',
    telefono: '',
    direccion: '',
    states: 0,
    municipality: 0,
    ocupacion_laboral: 0
  }

  const initialError = {
    id: '',
    cedula: '',
    nombre: '',
    apellido: '',
    sex: '',
    telefono: '',
    direccion: '',
    states: '',
    municipality: '',
    ocupacion_laboral: ''
  }

  const nameOfForm = [
    'cedula',
    'nombre',
    'apellido',
    'sex',
    'telefono',
    'direccion',
    'states',
    'municipality',
    'ocupacion_laboral'
  ]

  const [representante, setRepresentante] = useState(initialRepresentante)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)
  const [estados, setEstados] = useState([])
  const [municipios, setMunicipios] = useState([])
  const [ocupaciones, setOcupaciones] = useState([])

  useEffect(() => {
    getAllEstado().then(response => {
      console.log(response.data)
      setEstados(response.data)
    }).catch(() => {
      setEstados([{
        id: 0,
        states: 'no existen estados registrados'
      }])
    })
    getAllOcupaciones().then(response => {
      console.log(response.data)
      setOcupaciones(response.data)
    }).catch(() => {
      setOcupaciones([{
        id: 0,
        labor: 'no existen Ocupaciones Laborales registrados'
      }])
    })
  }, [])

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'representante').then(data => {
        setRepresentante(data[0])
        setValido(true)
      })
    }
  }, [id])

  useEffect(() => {
    if (representante.states !== 0) {
      getAllMunicpios(representante.states).then(response => {
        console.log(response.data)
        setMunicipios(response.data)
      }).catch(() => {
        setMunicipios([{
          id: 0,
          municipio: 'no existen Municipios registrados'
        }])
      })
    }
  }, [representante.states])

  /**
    * Manejar inputs de Representante
    * @param {any} event
    * */
  const handleChange = ({ target }) => {
    const { name, value, classList } = target
    setRepresentante({
      ...representante,
      [name]: value
    })
    validaciones(
      RepresentanteSchema[name],
      name,
      value,
      errors,
      setErrors,
      classList
    )
  }

  const clean = () => {
    cleanForm(setRepresentante, initialRepresentante, setErrors, initialError, nameOfForm)
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
      create('representante', {
        cedula: representante.cedula,
        nombre: representante.nombre,
        apellido: representante.apellido,
        sex: representante.sex,
        telefono: representante.telefono,
        direccion: representante.direccion,
        municipio: representante.municipality,
        ocupacion_laboral: representante.ocupacion_laboral
      }).then(response => {
        clean()
        console.log(response)
        console.log(response.data)
        setRegistro()
        setValido(false)
      })
    } else {
      update(id, 'representante', {
        cedula: representante.cedula,
        nombre: representante.nombre,
        apellido: representante.apellido,
        sex: representante.sex,
        telefono: representante.telefono,
        direccion: representante.direccion,
        municipio: representante.municipality,
        ocupacion_laboral: representante.ocupacion_laboral
      }).then(response => {
        clean()
        console.log(response)
        setRegistro()
        setValido(false)
      })
    }
  }

  useEffect(() => {
    const validacion = esValido(nameOfForm, errors)
    setValido(validacion)
  }, [errors])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="row justify-content-between w-100">
              <div className="col-10">
                <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Representante</h3>
              </div>
              <div className="col-2 text-end">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <div className="row">
                <div className="col-md-6 col-12 d-inline-block">
                  <label>Cedula</label>
                  <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="1.234.567" aria-label="Cedula" aria-describedby="cedula-addon" onChange={handleChange} name="cedula" value={representante.cedula} />
                    {errors.cedula ? <div className="invalid-feedback">{errors.cedula}</div> : null}
                  </div>
                </div>
                <div className="col-md-6 col-12 d-inline-block">
                  <label>Sexo</label>
                  <div className="input-group mb-3">
                    <select className="form-control" aria-label="Sexo" aria-describedby="sexo-addon" onChange={handleChange} name="sex" value={representante.sex} >
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                    {errors.sex ? <div className="invalid-feedback">{errors.sex}</div> : null}
                  </div>
                </div>
              </div>
              <label>Nombre(s)</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el nombre aqui..." aria-label="Nombre" aria-describedby="nombre-addon" onChange={handleChange} name="nombre" value={representante.nombre} />
                {errors.nombre ? <div className="invalid-feedback">{errors.nombre}</div> : null}
              </div>
              <label>Apellido(s)</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el apellido aqui..." aria-label="Apellido" aria-describedby="estado-addon" onChange={handleChange} name="apellido" value={representante.apellido} />
                {errors.apellido ? <div className="invalid-feedback">{errors.apellido}</div> : null}
              </div>
              <label>Telefono</label>
              <div className="input-group mb-3">
                <input type="number" className="form-control" placeholder="Escribe el Telefono aqui..." aria-label="Telefono" aria-describedby="telefono-addon" onChange={handleChange} name="telefono" value={representante.telefono} />
                {errors.telefono ? <div className="invalid-feedback">{errors.telefono}</div> : null}
              </div>
              <div className="row">
                <div className="col-md-6 col-12 d-inline-block">
                  <label>Estado</label>
                  <div className="input-group mb-3">
                    <select className="form-control" aria-label="Estado" aria-describedby="estado-addon" name="states" value={representante.states} onChange={handleChange}>
                      <option value="0">Seleccione un Estado...</option>
                      {
                        estados.map((estado, index) => {
                          return (<option value={estado.id} key={index}>{estado.states}</option>)
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12 d-inline-block">
                  <label>Municipio</label>
                  <div className="input-group mb-3">
                    <select className="form-control" aria-label="Municipio" aria-describedby="municipality-addon" onChange={handleChange} name="municipality" value={representante.municipality} >
                      <option value="0">Seleccione un Municipio...</option>
                      {
                        municipios.map((municipio, index) => {
                          return (<option value={municipio.id} key={index}>{municipio.municipio}</option>)
                        })
                      }
                    </select>
                    {errors.municipality ? <div className="invalid-feedback">{errors.municipality}</div> : null}
                  </div>
                </div>
              </div>
              <label>Dirección</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe la dirección aqui..." aria-label="Direccion" aria-describedby="direccion-addon" onChange={handleChange} name="direccion" value={representante.direccion} />
                {errors.direccion ? <div className="invalid-feedback">{errors.direccion}</div> : null}
              </div>
              <div className="row">
                <div className="col-12 d-inline-block">
                  <label>Ocupacion Laboral</label>
                  <div className="input-group mb-3">
                    <select className="form-control" aria-label="Ocupacion Laboral" aria-describedby="ocupacion_laboral-addon" onChange={handleChange} name="ocupacion_laboral" value={representante.ocupacion_laboral} >
                      <option value="0">Seleccione una Ocupación...</option>
                      {
                        ocupaciones.map((ocupacion, index) => {
                          return (<option value={ocupacion.id} key={index}>{ocupacion.labor}</option>)
                        })
                      }
                    </select>
                    {errors.ocupacion_laboral ? <div className="invalid-feedback">{errors.ocupacion_laboral}</div> : null}
                  </div>
                </div>
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

            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

FormRepresentante.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default FormRepresentante
