import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { URL_API } from '../../util/config'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const RecuperarContrasena = () => {
  const INITIAL_ERRORS = {
    respuesta: '',
    password: '',
    password2: ''
  }

  const history = useHistory()
  const { id } = useParams()

  const [verificar, setVerificar] = useState({
    pregunta: '',
    respuesta: '',
    password: '',
    password2: ''
  })
  const [errors, setErrors] = useState(INITIAL_ERRORS)

  const handleChange = (event) => {
    event.preventDefault()
    const { value, name } = event.target
    setVerificar({
      ...verificar,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (verificar.password !== verificar.password2) {
      toast.error('Deben coincidir las Contraseñas')
      setErrors('Deben coincidir las Contraseñas')
      return 0
    }
    if (verificar.respuesta === '') {
      toast.error('Las Campos Respuesta es obligatorio')
      setErrors(INITIAL_ERRORS)
      return 0
    }

    setErrors(INITIAL_ERRORS)

    axios.post(URL_API + '/api/auth/recuperarcontrasena/' + id, verificar)
      .then(() => {
        window.localStorage.removeItem('questOfUser')
        toast.success('Se creo una nueva Contraseña')
        history.push('/signin')
      })
      .catch(err => {
        const errores = err.response.data.errors
        toast.error('No se pudo crear una nueva contraseña')
        setErrors({ ...errors, ...errores })
      })
  }

  useEffect(() => {
    const pregunta = window.localStorage.getItem('questOfUser') || null

    if (!pregunta) {
      history.push('/verificarcorreo')
    }

    setVerificar({ ...verificar, pregunta: pregunta })
  }, [])

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row w-50">
        <div className="col-5 card position-absolute start-50 translate-middle mt-5" style={{ top: '370px' }}>
          <h3 className="p-4 text-center font-weight-bolder text-info text-gradient">Recuperar Contraseña</h3>
          <form action="" className="card-Body px-3">
            <div className="mb-3">
              <label className="form-label" htmlFor="pregunta">Pregunta de Seguridad:</label>
              <input className="form-control" type="text" id="pregunta" placeholder="ejmplo: ¿Mi color favorito?"
                value={verificar.pregunta} disabled />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="respuesta">Respuesta:</label>
              <input className="form-control" type="text" id="respuesta" name="respuesta" placeholder="ejemplo: Azul"
                value={verificar.respuesta} onChange={handleChange} />
              {errors.respuesta ? <div>{errors.respuesta}</div> : null}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contrasena">Nueva Contraseña</label>
              <input className="form-control" type="password" id="contrasena" name="password"
                value={verificar.password} onChange={handleChange} />
              {errors.password ? <div>{errors.password}</div> : null}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contrasena2">Repetir Nueva Contraseña</label>
              <input className="form-control" type="password" id="contrasena2" name="password2"
                value={verificar.password2} onChange={handleChange} />
              {errors.password2 ? <div>{errors.password2}</div> : null}
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary d-flex justify-content-end"
                onClick={handleSubmit}>Recuperar Contraseña</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default RecuperarContrasena
