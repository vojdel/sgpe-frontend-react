import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { URL_API } from '../../util/config'
import { useState } from 'react'
import toast from 'react-hot-toast'

const VerificarCorreo = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    const { value } = event.target
    setEmail(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(URL_API + '/api/auth/verificarcorreo', { email: email })
      .then(response => response.data)
      .then(data => {
        toast.success('Correo verificado')
        window.localStorage.setItem('questOfUser', data.pregunta)
        history.push('/recuperarcontrasena/' + data.id)
      })
      .catch(err => {
        // console.log({ err })
        const { msg } = err.response.data
        setError(msg)
        toast.error('Correo Invalido')
      })
  }

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="row mt-5 w-50">
        <div className="col-5 card position-absolute start-50 translate-middle mt-5" style={{ top: '370px' }}>
          <h3 className="p-4 text-center font-weight-bolder text-info text-gradient">Verificar Correo</h3>
          <form action="" className="card-Body px-3">
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Correo:</label>
              <input className="form-control" type="email" id="email" name="email" value={email} onChange={handleChange}
                placeholder="correo@correo.com" aria-describedby="emailHelp" />
              <span className="text-sm text-muted" style={{ color: '#f10' }}>{error}</span>
              <div id="emailHelp" className="form-text">
                Debe escribir el correo electronico para poder recuperar la contraseña
              </div>
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
export default VerificarCorreo
