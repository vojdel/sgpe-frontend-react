import { useState, useEffect } from 'react'
import { PersonalSchema, PersonalNextSchema } from './PersonalSchema'
import { validaciones, cleanForm } from '../../util/validations.js'
import PropTypes from 'prop-types'
import { getAll, getOne, create, update } from '../../services/service.js'
import { getAllEstado, getAllMunicpios, getAllCargos } from '../../services/cbbx'
import * as yup from 'yup'

/**
 * FormPersonal.
 * @returns Modal de Personal
 */
const FormPersonal = ({ id, setRegistro, changeId }) => {
  const initialPersonal = {
    cedula: '',
    nombre: '',
    apellido: '',
    sex: 'Masculino',
    telefono: '',
    direccion: '',
    states: 0,
    municipality: 0,
    anio_ing_inst: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
    anio_ing_mppe: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
    tit_pregrad: '',
    tit_postgrad: '',
    cargo: 0
  }

  const initialError = {
    cedula: '',
    nombre: '',
    apellido: '',
    sex: '',
    telefono: '',
    direccion: '',
    states: '',
    municipality: '',
    anio_ing_inst: '',
    anio_ing_mppe: '',
    tit_pregrad: '',
    tit_postgrad: '',
    cargo: ''
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
    'anio_ing_inst',
    'anio_ing_mppe',
    'tit_pregrad',
    'tit_postgrad',
    'cargo'
  ]

  const [personal, setPersonal] = useState(initialPersonal)
  const [errors, setErrors] = useState(initialError)
  const [validoNext, setValidoNext] = useState(false)
  const [valido, setValido] = useState(false)
  const [estados, setEstados] = useState([])
  const [municipios, setMunicipios] = useState([])
  const [cargos, setCargos] = useState([])

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
    getAllCargos().then(response => {
      console.log(response.data)
      setCargos(response.data)
    }).catch(() => {
      setCargos([{
        id: 0,
        cargos: 'no existen Cargos registrados'
      }])
    })
  }, [])

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'empleado').then(data => setPersonal(data[0]))
    }
  }, [id])

  useEffect(() => {
    if (personal.states !== 0) {
      getAllMunicpios(personal.states).then(response => {
        console.log(response.data)
        setMunicipios(response.data)
      }).catch(() => {
        setMunicipios([{
          id: 0,
          municipio: 'no existen Municipios registrados'
        }])
      })
    }
  }, [personal.states])

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleChange = (event) => {
    setPersonal({
      ...personal,
      [event.target.name]: event.target.value
    })
    validaciones(
      PersonalSchema[event.target.name],
      event.target.name,
      event.target.value,
      errors,
      setErrors,
      event.target.classList
    )
  }

  const clean = () => {
    cleanForm(setPersonal, initialPersonal, setErrors, initialError, nameOfForm)
    changeId(0)
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
      create('empleado', {
        cedula: personal.cedula,
        nombre: personal.nombre,
        apellido: personal.apellido,
        sex: personal.sex,
        telefono: personal.telefono,
        direccion: personal.direccion,
        municipio: personal.municipality,
        anio_ing_inst: personal.anio_ing_inst,
        anio_ing_mppe: personal.anio_ing_mppe,
        tit_pregrad: personal.tit_pregrad,
        tit_postgrad: personal.tit_postgrad,
        cargo: personal.cargo
      }).then(response => {
        clean()
        console.log(response)
        getAll('empleado').then(response => {
          console.log(response.data)
          setRegistro(response.data)
        }).finally(() => {
          setValido(false)
        })
      })
    } else {
      update(id, 'empleado', {
        cedula: personal.cedula,
        nombre: personal.nombre,
        apellido: personal.apellido,
        sex: personal.sex,
        telefono: personal.telefono,
        direccion: personal.direccion,
        municipio: personal.municipality,
        anio_ing_inst: personal.anio_ing_inst,
        anio_ing_mppe: personal.anio_ing_mppe,
        tit_pregrad: personal.tit_pregrad,
        tit_postgrad: personal.tit_postgrad,
        cargo: personal.cargo
      }).then(response => {
        clean()
        console.log(response)
        getAll('empleado').then(response => {
          setRegistro(response.data)
        })
      }).finally(() => {
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

  useEffect(async () => {
    // const validacion = esValido(nameOfForm, errors)
    const validacionNext = await yup.object().shape(PersonalNextSchema).isValid(personal)
    setValidoNext(validacionNext)
    const validacion = await yup.object().shape(PersonalSchema).isValid(personal)
    setValido(validacion)
  }, [errors])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-end">
            <div className="row">
              <div className="col-10">
                <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Personal</h3>
              </div>
              <div className="col-md-2">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
              </div>
              <div className="col-12">
                <nav style={{ marginBottom: '-1.05em' }}>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-home" aria-selected="true">Datos Generales</a>
                    <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-profile" aria-selected="false">Datos Profesionales</a>
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
                      <input type="number" className="form-control" placeholder="1.234.567" aria-label="Cedula" aria-describedby="cedula-addon" onChange={handleChange} name="cedula" value={personal.cedula} />
                      {errors.cedula ? <div className="invalid-feedback">{errors.cedula}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Sexo</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Sexo" aria-describedby="sexo-addon" onChange={handleChange} name="sex" value={personal.sexo} >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                      </select>
                      {errors.sex ? <div className="invalid-feedback">{errors.sex}</div> : null}
                    </div>
                  </div>
                </div>
                <label>Nombre(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe el nombre aqui..." aria-label="Nombre" aria-describedby="nombre-addon" onChange={handleChange} name="nombre" value={personal.nombre} />
                  {errors.nombre ? <div className="invalid-feedback">{errors.nombre}</div> : null}
                </div>
                <label>Apellido(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe el apellido aqui..." aria-label="Apellido" aria-describedby="estado-addon" onChange={handleChange} name="apellido" value={personal.apellido} />
                  {errors.apellido ? <div className="invalid-feedback">{errors.apellido}</div> : null}
                </div>
                <label>Telefono</label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" placeholder="Escribe el Telefono aqui..." aria-label="Telefono" aria-describedby="telefono-addon" onChange={handleChange} name="telefono" value={personal.telefono} />
                  {errors.telefono ? <div className="invalid-feedback">{errors.telefono}</div> : null}
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Estado</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Estado" aria-describedby="estado-addon" name="states" value={personal.states} onChange={handleChange} >
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
                      <select className="form-control" aria-label="Municipio" aria-describedby="municipality-addon" onChange={handleChange} name="municipality" value={personal.municipality} >
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
                  <input type="text" className="form-control" placeholder="Escribe la dirección aqui..." aria-label="Direccion" aria-describedby="direccion-addon" onChange={handleChange} name="direccion" value={personal.direccion} />
                  {errors.direccion ? <div className="invalid-feedback">{errors.direccion}</div> : null}
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
                    <label>Año de Ingreso a la Institución</label>
                    <div className="input-group mb-3">
                      <input type="date" className="form-control" aria-label="anio_ing_inst" aria-describedby="anio_ing-inst-addon" onChange={handleChange} name="anio_ing_inst" value={personal.anio_ing_inst} />
                      {errors.anio_ing_inst ? <div className="invalid-feedback">{errors.anio_ing_inst}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Año de Ingreso al MPPE</label>
                    <div className="input-group mb-3">
                      <input type="date" className="form-control" aria-label="anio_ing_mppe" aria-describedby="anio_ing_mppe-addon" onChange={handleChange} name="anio_ing_mppe" value={personal.anio_ing_mppe} />
                      {errors.anio_ing_mppe ? <div className="invalid-feedback">{errors.anio_ing_mppe}</div> : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Titulo Pregrado</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Escribe el titulo de pregrado aqui..." aria-label="Titulo Pregrado" aria-describedby="tit_pregrad-addon" onChange={handleChange} name="tit_pregrad" value={personal.tit_pregrad} />
                      {errors.tit_pregrad ? <div className="invalid-feedback">{errors.tit_pregrad}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Titulo Postgrado</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Escribe El titulo de Postgrado aqui..." aria-label="Titulo Postgrado" aria-describedby="tit_postgrad-addon" onChange={handleChange} name="tit_postgrad" value={personal.tit_postgrad} />
                      {errors.tit_postgrad ? <div className="invalid-feedback">{errors.tit_postgrad}</div> : null}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label>Cargo</label>
                  <div className="input-group mb-3">
                    <select className="form-control" aria-label="Cargo" aria-describedby="cargo-addon" onChange={handleChange} name="cargo" value={personal.cargo} >
                      <option value="0">Seleccione un Cargo...</option>
                      {
                        cargos.map((cargo, index) => {
                          return (<option value={cargo.id} key={index}>{cargo.cargos}</option>)
                        })
                      }
                    </select>
                    {errors.cargo ? <div className="invalid-feedback">{errors.cargo}</div> : null}
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

FormPersonal.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default FormPersonal
