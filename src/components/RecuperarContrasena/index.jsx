const RecuperarContrasena = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="card-header text-center text-primary">Recuperar Contraseña</div>
        <div className="col-6 card">
          <form action="" className="card-Body px-3">
            <div className="mb-3">
              <label className="form-label" htmlFor="pregunta">Pregunta de Seguridad:</label>
              <input className="form-control" type="text" id="pregunta" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="respuesta">Respuesta:</label>
              <input className="form-control" type="text" id="respuesta" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contrasena">Nueva Contraseña</label>
              <input className="form-control" type="password" id="contrasena" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contrasena2">Repetir Nueva Contraseña</label>
              <input className="form-control" type="password" id="contrasena2" />
            </div>
            <button type="submit" className="btn btn-primary">Recuperar Contraseña</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default RecuperarContrasena
