import { useState } from 'react'

/**
 * FormUsuario.
 * @returns Modal de Usuario
 */
const FormUsuario = () => {
  const initialUsuario = {
    id: 0,
    username: '',
    tipo: 0,
    passw: '',
    passw_confirm: '',
    pregunta: '',
    respuesta: '',
    personal: {
      id: 0,
      cedula: '',
      nombre: '',
      apellido: '',
      cargo: ''
    }
  }

  const [usuario, setUsuario] = useState(initialUsuario)

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleChange = (event) => {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value
    })
    console.log({ usuario })
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

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-end">
            <div className="row">
              <div className="col-10">
                <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Usuario</h3>
              </div>
              <div className="col-md-2">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                    <label>Cedula</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="1.234.567" aria-label="Cedula" aria-describedby="cedula-addon" onChange={handleChange} name="personal.cedula" value={usuario.personal.cedula} />
                    </div>
                  </div>
                </div>
                <label>Nombre(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" aria-label="Nombre" aria-describedby="nombre-addon" name="nombre" value={usuario.personal.nombre} disabled />
                </div>
                <label>Apellido(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" aria-label="Apellido" aria-describedby="estado-addon" name="apellido" value={usuario.personal.apellido} disabled />
                </div>
                <div className="row">
                  <div className="col-12">
                    <label> Cargo</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" aria-label="Cargo" aria-describedby="cargo-addon" name="cargo" value={usuario.personal.cargo} disabled />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn bg-gradient-info" onClick={() => handleTabs('profile', 'home')} > Continuar</button>
                </div>
              </div>

              <div className="tab-pane fade d-none" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Nombre de Usuario</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Escribe El Nombre de Usuario aqui..." aria-label="UserName" aria-describedby="username-addon" onChange={handleChange} name="username" value={usuario.username} />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Tipo de Usuario</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Tipo de Usuario" aria-describedby="tipo-addon" onChange={handleChange} name="tipo" value={usuario.tipo} >
                        <option value="">Seleccione...</option>
                        <option value="1">Administrador</option>
                        <option value="2">Primaria</option>
                        <option value="3">Secundaria</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Contraseña</label>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" placeholder="********" aria-label="Contraseña" aria-describedby="password-addon" onChange={handleChange} name="passw" value={usuario.passw} />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Confirmar Contraseña</label>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" placeholder="********" aria-label="Confirmar Contraseña" aria-describedby="passw_confirm-addon" onChange={handleChange} name="passw_confirm" value={usuario.passw_confirm} />
                    </div>
                  </div>
                </div>
                <label>Pregunta de Seguridad</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe la pregunta de seguridad aqui..." aria-label="Pregunta de Seguridad" aria-describedby="pregunta-addon" onChange={handleChange} name="pregunta" value={usuario.pregunta} />
                </div>
                <label>Respuesta</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe la respuesta aqui..." aria-label="Respuesta" aria-describedby="respuesta-addon" onChange={handleChange} name="respuesta" value={usuario.respuesta} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn bg-gradient-danger" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn bg-gradient-warning" onClick={() => handleTabs('home', 'profile')}>Atras</button>
                  <button type="button" className="btn bg-gradient-info">Registrar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
export default FormUsuario
