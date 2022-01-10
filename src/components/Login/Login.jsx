import Nav from './Nav.jsx'
import { login } from '../../services/login'
import { useEffect, useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const history = useHistory()
  const { auth, logged } = useContext(AuthContext)

  /**
    * Manejar input of Form
    * @param {any} event
    * */
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: [event.target.value]
    })
  }

  useEffect(() => {
    if (typeof auth === 'boolean' && auth) {
      history.push('/')
    }
  }, [])

  /**
    * Manejar input of Form
    * @param {any} event
    * */
  const handleLogin = (event) => {
    event.preventDefault()
    login(form, setForm, history.push, logged).catch(e => {
      console.log(e)
      console.log(e.error)
      setError('correo o contraseña invalidos')
      setTimeout(() => {
        setError('')
      }, 5000)
    })
  }

  return (
    <div className="position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12" style={{ paddingRight: '0px' }}>

          <Nav />

          <section>
            <div className="page-header section-height-75">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-colum mx-auto">
                    <div className="card card-plain mt-8 border-white">
                      <div className="card-header pb-0 text-left bg-transparent border-white">
                        <h3 className="font-weight-bolder text-info text-gradient text-center">Bienvenido</h3>
                        <p className="mb-0">Escribe tu corre y tu contraseña</p>
                      </div>
                      <div className="card-body">
                        <div className="text-danger text-sm">{error}</div>
                        <form role="form text-left" onSubmit={handleLogin}>
                          <label>Email</label>
                          <div className="mb-3">
                            <input type="email" name="email" onChange={handleChange} value={form.email} id="" className="form-control" placeholder="Email" aria-describedby="password-addon" />
                          </div>
                          <label>Password</label>
                          <div className="mb-3">
                            <input type="password" name="password" onChange={handleChange} value={form.password} id="" className="form-control" placeholder="Password" aria-describedby="password-addon" />
                          </div>
                          {
                            // <div className="form-check form-switch">
                            // <input className="form-check-input" type="checkbox" id="rememberMe" checked style={{ width: '40px' }} />
                            // <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            // </div>
                          }
                          <div className="text-center">
                            <button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0" onClick={handleLogin}>Sign in</button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center pt-0 px-lg-2 px-1 border-white">
                        <p className="mb-4 text-sm mx-auto">¿No te acuerdas tu contraseña?
                          <br />
                          <Link to="/verificarcorreo" className="text-info text-gradient font-weight-bold">Recuperar Contraseña</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                      <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: 'url(/img/img1.jpg)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Login
