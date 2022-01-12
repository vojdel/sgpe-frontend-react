import { useState, useEffect } from 'react'
import { validaciones, cleanForm } from '../../util/validations.js'
import { getOne, create, update } from '../../services/service.js'
import { object } from 'yup'
import { getAllEmpleados } from '../../services/cbbx'
import PropTypes from 'prop-types'
import { UsuarioSchema, UsuarioNextSchema, UsuarioWithoutPasswordSchema } from './UsuarioSchema.js'
import toast from 'react-hot-toast'

/**
 * FormUsuario.
 * @returns Modal de Usuario
 */
const FormUsuario = ({ id, setRegistro, changeId }) => {
  const initialUsuario = {
    email: 'correo@gmail.com',
    tipo: 0,
    passw: '',
    passw_confirm: '',
    pregunta: '',
    respuesta: '',
    empleado_id: 0,
    empleado: {
      cedula: '',
      nombre: '',
      apellido: '',
      cargo: ''
    }
  }

  const initialError = {
    email: '',
    tipo: '',
    passw: '',
    passw_confirm: '',
    pregunta: '',
    respuesta: '',
    empleado_id: ''
  }

  const nameOfForm = [
    'email',
    'tipo',
    'passw',
    'passw_confirm',
    'pregunta',
    'respuesta',
    'empleado_id'
  ]

  // const tipoUsuario = [
  // { id: 1, tipo: 'admin' },
  // { id: 2, tipo: 'primaria' },
  // { id: 3, tipo: 'secundaria' }
  // ]

  const [usuario, setUsuario] = useState(initialUsuario)
  const [errors, setErrors] = useState(initialError)
  const [validoNext, setValidoNext] = useState(false)
  const [valido, setValido] = useState(false)
  const [empleados, setEmpleados] = useState([{
    id: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    cargo: ''
  }])

  useEffect(() => {
    getAllEmpleados(true).then(response => {
      setEmpleados(response.data)
    }).catch(() => {
      setEmpleados([{
        id: 0,
        cedula: 'no ',
        nombre: 'existen ',
        apellido: 'Empleados ',
        cargo: ' registrados'
      }])
    })
  }, [])

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'usuario').then(data => {
        setUsuario(data)
      })
      setValido(true)
      setValidoNext(true)
    }
  }, [id])

  /**
  * Manejar input estado
  * @param {any} event
  * */
  const handleChange = ({ target }) => {
    const { value, name, classList } = target
    if (name === 'empleado_id') {
      const empleadoSelect = empleados.filter(empleado => {
        return empleado.id === parseInt(value)
      })
      setUsuario({
        ...usuario,
        empleado_id: value,
        empleado: {
          cedula: empleadoSelect[0].cedula,
          nombre: empleadoSelect[0].nombre,
          apellido: empleadoSelect[0].apellido,
          cargo: empleadoSelect[0].cargo
        }
      })
    } else {
      setUsuario({
        ...usuario,
        [name]: value
      })
    }
    validaciones(
      UsuarioSchema[name],
      name,
      value,
      errors,
      setErrors,
      classList
    )
  }

  const clean = () => {
    cleanForm(setUsuario, initialUsuario, setErrors, initialError, nameOfForm)
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
      create('usuario', {
        email: usuario.email,
        tipo: usuario.tipo,
        password: usuario.passw,
        pregunta: usuario.pregunta,
        respuesta: usuario.respuesta,
        empleado_id: usuario.empleado_id
      }).then(response => {
        toast.success('Se creó el registro: ' + usuario.empleado.name + ' ' + usuario.empleado.apellido)
        clean()
        setRegistro()
        setValido(false)
      })
    } else {
      update(id, 'usuario', {
        email: usuario.email,
        tipo: usuario.tipo,
        pregunta: usuario.pregunta,
        respuesta: usuario.respuesta,
        empleado_id: usuario.empleado_id
      }).then(response => {
        toast.success('Se modificó el registro: ' + usuario.empleado.name + ' ' + usuario.empleado.apellido)
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
    const validacionNext = await object().shape(UsuarioNextSchema).isValid(usuario)
    setValidoNext(validacionNext)
    if (id === 0) {
      const validacion = await object().shape(UsuarioSchema).isValid(usuario)
      setValido(validacion)
    } else {
      const validacion = await object().shape(UsuarioWithoutPasswordSchema).isValid(usuario)
      setValido(validacion)
    }
  }

  useEffect(() => {
    handleErrors()
  }, [errors])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-end">
            <div className="row">
              <div className="col-10">
                <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Usuario</h3>
              </div>
              <div className="col-md-2">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
              </div>
              <div className="col-12">
                <nav style={{ marginBottom: '-1.05em' }}>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-home" aria-selected="true">Personal</a>
                    <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-profile" aria-selected="false">Usuario</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="modal-body tab-content" id="nav-tabContent">
            <form role="form text-left">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="row">
                  <div className="col-12 d-inline-block">
                    <label className="form-label" htmlFor="empleado_id">Cedula</label>
                    <div className="input-group mb-3">
                      <select
                        className="form-control"
                        aria-label="emplaedo"
                        id="empleado_id"
                        aria-describedby="empleado-addon"
                        name="empleado_id"
                        onChange={handleChange}
                        value={usuario.empleado_id}
                        disabled={(id !== 0)}
                      >
                        <option value="0">Seleccione un Empleado...</option>
                        {
                          empleados.map((empleado, index) => {
                            return (<option value={empleado.id} key={index}>
                              {`${empleado.cedula}, ${empleado.nombre} ${empleado.apellido}, ${empleado.cargo}`}
                            </option>)
                          })
                        }
                      </select>
                      {errors.empleado_id ? <div className="invalid-feedback">{errors.empleado_id}</div> : null}
                    </div>
                  </div>
                </div>
                <label>Nombre(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control-plaintext" aria-label="Nombre" aria-describedby="nombre-addon" name="nombre" value={usuario.empleado.nombre} readOnly />
                </div>
                <label>Apellido(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control-plaintext" aria-label="Apellido" aria-describedby="estado-addon" name="apellido" value={usuario.empleado.apellido} readOnly />
                </div>
                <div className="row">
                  <div className="col-12">
                    <label> Cargo</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control-plaintext" aria-label="Cargo" aria-describedby="cargo-addon" name="cargo" value={usuario.empleado.cargo} readOnly />
                    </div>
                  </div>
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
                  <div className="col-12 d-inline-block">
                    <label>Correo:</label>
                    <div className="input-group mb-3">
                      <input type="email" name="email" id="email" className="form-control" value={usuario.email} onChange={handleChange} />
                      {errors.email ? <div className="invalid-feedback">{errors.email}</div> : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-inline-block">
                    <label>Tipo de Usuario</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Tipo de Usuario" aria-describedby="tipo-addon" onChange={handleChange} name="tipo" value={usuario.tipo} >
                        <option value="">Seleccione...</option>
                        <option value="1">Administrador</option>
                        <option value="2">Primaria</option>
                        <option value="3">Secundaria</option>
                      </select>
                      {errors.tipo ? <div className="invalid-feedback">{errors.tipo}</div> : null}
                    </div>
                  </div>
                </div>
                <div className="row" hidden={(id !== 0)}>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Contraseña</label>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" placeholder="********" aria-label="Contraseña" aria-describedby="password-addon" onChange={handleChange} name="passw" value={usuario.passw} />
                      {errors.passw ? <div className="invalid-feedback">{errors.passw}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Confirmar Contraseña</label>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" placeholder="********" aria-label="Confirmar Contraseña" aria-describedby="passw_confirm-addon" onChange={handleChange} name="passw_confirm" value={usuario.passw_confirm} />
                      {errors.passw_confirm ? <div className="invalid-feedback">{errors.passw_confirm}</div> : null}
                    </div>
                  </div>
                </div>
                <label>Pregunta de Seguridad</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe la pregunta de seguridad aqui..." aria-label="Pregunta de Seguridad" aria-describedby="pregunta-addon" onChange={handleChange} name="pregunta" value={usuario.pregunta} />
                  {errors.pregunta ? <div className="invalid-feedback">{errors.pregunta}</div> : null}
                </div>
                <label>Respuesta</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe la respuesta aqui..." aria-label="Respuesta" aria-describedby="respuesta-addon" onChange={handleChange} name="respuesta" value={usuario.respuesta} />
                  {errors.respuesta ? <div className="invalid-feedback">{errors.respuesta}</div> : null}
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

FormUsuario.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default FormUsuario
