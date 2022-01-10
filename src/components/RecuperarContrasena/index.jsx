import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { URL_API } from '../../util/config'
import { useState } from 'react'
import toast from 'react-hot-toast'

const RecuperarContrasena = () => {
  const history = useHistory()
  const { id } = useParams()

  const [verificar, setVerificar] = useState({
    pregunta: '',
    respuesta: '',
    password: '',
    password2: ''
  })

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
      return 0
    }
    if (verificar.pregunta === '' || verificar.respuesta === '') {
      toast.error('Deben coincidir las Contraseñas')
      return 0
    }
    axios.post(URL_API + '/api/auth/nuevacontraseña/' + id, verificar)
      .then(response => response.data)
      .then(data => {
        history.push('/signin')
        toast.success('Se creo una nueva Contraseña')
        console.log(data)
      })
      .catch(err => {
        console.log(err)
        toast.error('No se pudo crear una nueva contraseña')
      })
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row w-50">
        <div className="col-5 card position-absolute start-50 translate-middle mt-5" style={{ top: '370px' }}>
          <h3 className="p-4 text-center font-weight-bolder text-info text-gradient">Recuperar Contraseña</h3>
          <form action="" className="card-Body px-3">
            <div className="mb-3">
              <label className="form-label" htmlFor="pregunta">Pregunta de Seguridad:</label>
              <input className="form-control" type="text" id="pregunta" placeholder="ejmplo: ¿Mi color favorito?"
                value={verificar.pregunta} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="respuesta">Respuesta:</label>
              <input className="form-control" type="text" id="respuesta" placeholder="ejemplo: Azul"
                value={verificar.respuesta} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contrasena">Nueva Contraseña</label>
              <input className="form-control" type="password" id="contrasena"
                value={verificar.password} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contrasena2">Repetir Nueva Contraseña</label>
              <input className="form-control" type="password" id="contrasena2"
                value={verificar.password2} onChange={handleChange} />
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
