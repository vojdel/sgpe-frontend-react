import { useState, useEffect } from 'react'
import { EstudianteSchema, EstudianteNextSchema } from './EstudianteSchema'
import { validaciones, cleanForm } from '../../util/validations.js'
import { getOne, create, update } from '../../services/service.js'
import { getAllEstado, getAllMunicpios } from '../../services/cbbx'
import { object } from 'yup'
import PropTypes from 'prop-types'
import toast from 'react-hot-toast'

/**
 * FormEstudiante.
 * @returns Modal de Estudiante
 */
const FormEstudiante = ({ id, setRegistro, changeId }) => {
  const initialEstudiante = {
    id: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    sex: 'Masculino',
    telefono: '',
    direccion: '',
    states: 0,
    municipality: 0,
    fecha_nacimiento: '',
    lugar_nacimiento: '',
    descripcion: '',
    estatura: '',
    peso: '',
    talla: '',
    t_sangre: '',
    fecha_inscrip: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
    estado_inscrip: false,
    beca: false,
    repite: false
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
    fecha_nacimiento: '',
    lugar_nacimiento: '',
    descripcion: '',
    estatura: '',
    peso: '',
    talla: '',
    t_sangre: '',
    fecha_inscrip: '',
    estado_inscrip: '',
    beca: '',
    repite: ''
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
    'fecha_nacimiento',
    'lugar_nacimiento',
    'descripcion',
    'estatura',
    'peso',
    'talla',
    't_sangre',
    'fecha_inscrip'
    // 'estado_inscrip',
    // 'beca',
    // 'repite'
  ]

  const [estudiante, setEstudiante] = useState(initialEstudiante)
  const [errors, setErrors] = useState(initialError)
  const [validoNext, setValidoNext] = useState(false)
  const [valido, setValido] = useState(false)
  const [estados, setEstados] = useState([])
  const [municipios, setMunicipios] = useState([])

  useEffect(() => {
    getAllEstado().then(response => {
      setEstados(response.data)
    }).catch(() => {
      setEstados([{
        id: 0,
        states: 'no existen estados registrados'
      }])
    })
  }, [])

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'estudiante').then(data => {
        setEstudiante(data[0])
        setValido(true)
        setValidoNext(true)
      })
    }
  }, [id])

  useEffect(() => {
    if (estudiante.states !== 0) {
      getAllMunicpios(estudiante.states).then(response => {
        setMunicipios(response.data)
      }).catch(() => {
        setMunicipios([{
          id: 0,
          municipio: 'no existen Municipios registrados'
        }])
      })
    }
  }, [estudiante.states])

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleChange = ({ target }) => {
    const { name, classList } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    setEstudiante({
      ...estudiante,
      [name]: value
    })
    validaciones(
      EstudianteSchema[name],
      name,
      value,
      errors,
      setErrors,
      classList
    )
    console.log(`${name}: ${value}`)
  }

  const clean = () => {
    cleanForm(setEstudiante, initialEstudiante, setErrors, initialError, nameOfForm)
    changeId()
    setTimeout(() => {
      setValido(false)
    }, 1000)
    handleTabs('home', 'profile')
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (id === 0) {
      create('estudiante', {
        ...estudiante,
        municipio: estudiante.municipality
      }).then(response => {
        toast.success('Se creó el registro: ' + estudiante.nombre + ' ' + estudiante.apellido)
        clean()
        setRegistro()
        setValido(false)
      })
    } else {
      update(id, 'estudiante', {
        ...estudiante,
        municipio: estudiante.municipality
      }).then(response => {
        toast.success('Se modificó el registro: ' + estudiante.nombre + ' ' + estudiante.apellido)
        clean()
        setRegistro()
        setValido(false)
      })
    }
  }

  /**
    * @param {string} show
    * @param {string} hidden
    * @return {void}
    * */
  const handleTabs = (show, hidden) => {
    const showContent = document.querySelector(`#nav-${show}`)
    const showTabContent = document.querySelector(`#nav-${show}-tab`)
    const hiddenContent = document.querySelector(`#nav-${hidden}`)
    const hiddenTabContent = document.querySelector(`#nav-${hidden}-tab`)

    showTabContent.classList.add('active')
    hiddenTabContent.classList.remove('active')

    showContent.classList.remove('d-none')
    showContent.classList.remove('fade')
    showContent.classList.add('show')
    showContent.classList.add('active')
    hiddenContent.classList.remove('active')
    hiddenContent.classList.remove('show')
    hiddenContent.classList.add('d-none')
  }

  const handleErrors = async () => {
    const validacionNext = await object().shape(EstudianteNextSchema).isValid(estudiante)
    setValidoNext(validacionNext)
    console.log(validacionNext)
    const validacion = await object().shape(EstudianteSchema).isValid(estudiante)
    setValido(validacion)
  }

  useEffect(() => {
    handleErrors()
  }, [errors])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={'-' + 1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-end">
            <div className="row">
              <div className="col-10">
                <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Estudiante</h3>
              </div>
              <div className="col-md-2">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
              </div>
              <div className="col-12">
                <nav style={{ marginBottom: '-1.05em' }}>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-home" aria-selected="true">Datos Generales</a>
                    <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-profile" aria-selected="false">Otros Datos</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="modal-body tab-content" id="nav-tabContent">
            <form role="form text-left">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Cedula</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="1.234.567" aria-label="Cedula" aria-describedby="cedula-addon" onChange={handleChange} name="cedula" value={estudiante.cedula} />
                      {errors.cedula ? <div className="invalid-feedback">{errors.cedula}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Sexo</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Sexo" aria-describedby="sexo-addon" onChange={handleChange} name="sex" value={estudiante.sex} >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                      </select>
                      {errors.sex ? <div className="invalid-feedback">{errors.sex}</div> : null}
                    </div>
                  </div>
                </div>
                <label>Nombre(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe el nombre aqui..." aria-label="Nombre" aria-describedby="nombre-addon" onChange={handleChange} name="nombre" value={estudiante.nombre} />
                  {errors.nombre ? <div className="invalid-feedback">{errors.nombre}</div> : null}
                </div>
                <label>Apellido(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe el apellido aqui..." aria-label="Apellido" aria-describedby="estado-addon" onChange={handleChange} name="apellido" value={estudiante.apellido} />
                  {errors.apellido ? <div className="invalid-feedback">{errors.apellido}</div> : null}
                </div>
                <label>Telefono</label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" placeholder="Escribe el Telefono aqui..." aria-label="Telefono" aria-describedby="telefono-addon" onChange={handleChange} name="telefono" value={estudiante.telefono} />
                  {errors.telefono ? <div className="invalid-feedback">{errors.telefono}</div> : null}
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Estado</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Estado" aria-describedby="estado-addon" name="states" onChange={handleChange} value={estudiante.states}>
                        <option value="0">Seleccione un Estado...</option>
                        {
                          estados.map((estado, index) => {
                            return (<option value={estado.id} key={index}>{estado.states}</option>)
                          })
                        }
                      </select>
                      {errors.states ? <div className="invalid-feedback">{errors.states}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Municipio</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Municipio" aria-describedby="municipality-addon" onChange={handleChange} name="municipality" value={estudiante.municipality} >
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
                  <input type="text" className="form-control" placeholder="Escribe la dirección aqui..." aria-label="Direccion" aria-describedby="direccion-addon" onChange={handleChange} name="direccion" value={estudiante.direccion} />
                  {errors.direccion ? <div className="invalid-feedback">{errors.direccion}</div> : null}
                </div>
                <label>fecha de nacimiento</label>
                <div className="input-group mb-3">
                  <input type="date" className="form-control" aria-label="Facha de nacimiento" aria-describedby="fecha_nacimiento-addon" onChange={handleChange} name="fecha_nacimiento" value={estudiante.fecha_nacimiento} />
                  {errors.fecha_nacimiento ? <div className="invalid-feedback">{errors.fecha_nacimiento}</div> : null}
                </div>
                <label>Lugar de Nacimiento</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe el Lugar de nacimiento aqui..." aria-label="Lugar de Nacimiento" aria-describedby="lugar_nacimiento-addon" onChange={handleChange} name="lugar_nacimiento" value={estudiante.lugar_nacimiento} />
                  {errors.lugar_nacimiento ? <div className="invalid-feedback">{errors.lugar_nacimiento}</div> : null}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
                  {
                    (validoNext)
                      ? <button type="button" className="btn bg-gradient-info" onClick={() => handleTabs('profile', 'home')} > Continuar</button>
                      : <button type="button" className="btn bg-gradient-info" disabled> Continuar</button>
                  }
                </div>
              </div>

              <div className="tab-pane fade d-none" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Estatura</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="Escribe la estatura aqui..." aria-label="Estatura" aria-describedby="estatura-addon" onChange={handleChange} name="estatura" value={estudiante.estatura} />
                      {errors.estatura ? <div className="invalid-feedback">{errors.estatura}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Peso</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="Escribe el peso aqui..." aria-label="Peso" aria-describedby="peso-addon" onChange={handleChange} name="peso" value={estudiante.peso} />
                      {errors.peso ? <div className="invalid-feedback">{errors.peso}</div> : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Talla</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="Escribe La talla aqui..." aria-label="Talla" aria-describedby="talla-addon" onChange={handleChange} name="talla" value={estudiante.talla} />
                      {errors.talla ? <div className="invalid-feedback">{errors.talla}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Tipo de Sangre</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Tipo de Sangre" aria-describedby="t_sangre-addon" onChange={handleChange} name="t_sangre" value={estudiante.t_sangre} >
                        <option value="">Seleccione...</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                      </select>
                      {errors.t_sangre ? <div className="invalid-feedback">{errors.t_sangre}</div> : null}
                    </div>
                  </div>
                </div>
                <label>Descripción</label>
                <div className="input-group mb-3">
                  <textarea className="form-control" placeholder="Escribe la Descripción aqui..." aria-label="Descripcion" aria-describedby="descripcion-addon" onChange={handleChange} name="descripcion" value={estudiante.descripcion} ></textarea>
                  {errors.descripcion ? <div className="invalid-feedback">{errors.descripcion}</div> : null}
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Fecha de Inscripción</label>
                    <div className="input-group mb-3">
                      <input type="date" name="fecha_inscrip" id="fecha_inscrip" className="form-control" value={estudiante.fecha_inscrip} onChange={handleChange} />
                    </div>
                    {errors.fecha_inscrip ? <div className="invalid-feedback">{errors.fecha_inscrip}</div> : null}
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <div className="form-check mb-3">
                      <label className="form-check-label" htmlFor="estado_inscrip">Estado de Inscripcion </label>
                      <input type="checkbox" name="estado_inscrip" id="estado_inscrip" className="form-checkbox-input" checked={estudiante.estado_inscrip} onChange={handleChange} />
                    </div>
                    {errors.estado_inscrip ? <div className="invalid-feedback">{errors.estado_inscrip}</div> : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <div className="form-check mb-3">
                      <label className="form-check-label" htmlFor="beca">Beca </label>
                      <input type="checkbox" className="form-checkbox-input" name="beca" id="beca" checked={estudiante.beca} onChange={handleChange} />
                    </div>
                    {errors.beca ? <div className="invalid-feedback">{errors.beca}</div> : null}
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <div className="form-check mb-3">
                      <label className="form-check-label" htmlFor="repite">Repite </label>
                      <input type="checkbox" className="form-checkbox-input" name="repite" id="repite" checked={estudiante.repite} onChange={handleChange} />
                    </div>
                    {errors.repite ? <div className="invalid-feedback">{errors.repite}</div> : null}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn bg-gradient-danger" data-bs-dismiss="modal" onClick={clean}>Close</button>
                  <button type="button" className="btn bg-gradient-warning" onClick={() => handleTabs('home', 'profile')}>Atras</button>
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
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

FormEstudiante.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default FormEstudiante
