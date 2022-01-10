import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Suspense, lazy, useState, useContext, useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Siderbar from './components/layout/Siderbar'
import Navbar from './components/layout/Navbar'
import './App.css'
import { AuthContext } from './context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
// import Footer from './components/layout/Footer'

const Municipio = lazy(() => import('./components/Municipio/Municipio'))
const Estado = lazy(() => import('./components/Estado/Estado'))
const PageNotFound = lazy(() => import('./components/PageNoFound'))
// const Home = lazy(() => import('./components/Home'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const Login = lazy(() => import('./components/Login/Login'))
const SignUp = lazy(() => import('./components/Registrar/Registrar'))
// const Alergia = lazy(() => import('./components/Alergia/Alergia'))
const Estudiante = lazy(() => import('./components/Estudiante/Estudiante'))
const Representante = lazy(() => import('./components/Representante/Representante'))
const Personal = lazy(() => import('./components/Personal/Personal'))
const Cargo = lazy(() => import('./components/Cargo/Cargo'))
const Grado = lazy(() => import('./components/Grado/Grado'))
const Seccion = lazy(() => import('./components/Seccion/Seccion'))
const Materia = lazy(() => import('./components/Materia/Materia'))
const OcupacionLaboral = lazy(() => import('./components/OcupacionLaboral/OcupacionLaboral'))
const Usuario = lazy(() => import('./components/Usuario/Usuario'))
const Logout = lazy(() => import('./components/layout/logout'))
const PeriodoEscolar = lazy(() => import('./components/PeriodoEscolar/PeriodoEscolar'))
const Inscripcion = lazy(() => import('./components/Inscripcion/Inscripcion'))
const FormInscripcion = lazy(() => import('./components/Inscripcion/FormInscripcion'))
const Asistencia = lazy(() => import('./components/Asistencia/Asistencia'))
const Notas = lazy(() => import('./components/Notas/Notas'))
const NotasEstudiante = lazy(() => import('./components/Notas/NotasEstudiantes'))
const Backup = lazy(() => import('./components/Backup/Backup'))
const RecuperarContrasena = lazy(() => import('./components/RecuperarContrasena'))

// eslint-disable-next-line space-before-function-paren
function App() {
  const styleSiderHidden = {
    aside: 'sidenav navbat navbar-vertical navbar-expand-xs border-0 fixed-left d-none',
    main: '15.65rem',
    menu: true
  }

  const [styleAside, setStyleAside] = useState(styleSiderHidden)
  const { auth, authenticated } = useContext(AuthContext)
  const context = useContext(AuthContext)

  // const tipoUser = window.localStorage.getItem('loggedUser')
  // const tipo = JSON.parse(tipoUser).tipo

  const handleSiderHidden = () => {
    if (styleAside.menu) {
      document.body.classList.add('g-sidenav-pinned')
      setStyleAside({
        ...styleAside,
        menu: false
      })
    } else {
      document.body.classList.remove('g-sidenav-pinned')
      setStyleAside(styleSiderHidden)
    }
  }

  const handleMenu = () => {
    if (styleAside.menu) {
      setStyleAside({
        ...styleAside,
        aside: 'sidenav navbat navbar-vertical navbar-expand-xs border-0 fixed-left',
        menu: false
      })
    } else {
      setStyleAside(styleSiderHidden)
    }
  }

  useEffect(() => {
    authenticated()
    toast('Hello User!!', { icon: '👏' })
  }, [])

  console.log(context)
  return (
    <div className="g-sidenav-show bg-gray-100 min-vw-100">
      <Router>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <main
          className="main-content border-radius-lg min-vh-100"
          style={{ marginLeft: '0px' }}>
          <Siderbar
            estilo={styleAside.aside}
            handleMenu={handleMenu}
          />
          <Navbar
            handleSiderHidden={handleSiderHidden}
            handleMenu={handleMenu}
          />
          <Suspense fallback={<div className="spinner"></div>}>
            <Switch>
              <Route path="/signin" render={() => {
                return auth ? <Redirect to="/" /> : <Login />
              }} exact>
              </Route>
              <Route path="/recuperarcontrasena" render={() => {
                return auth ? <Redirect to="/" /> : <RecuperarContrasena />
              }} exact>
              </Route>
              <Route path="/signup" component={SignUp} exact />
              < Route path="/estado" component={Estado} exact />
              <Route path="/municipio" component={Municipio} exact />
              <Route path="/estudiante" component={Estudiante} exact />
              <Route path="/representante" component={Representante} exact />
              <Route path="/personal" component={Personal} exact />
              <Route path="/cargo" component={Cargo} exact />
              <Route path="/grado" component={Grado} exact />
              <Route path="/seccion" component={Seccion} exact />
              <Route path="/materia" component={Materia} exact />
              <Route path="/ocupacionlaboral" component={OcupacionLaboral} exact />
              <Route path="/periodoescolar" component={PeriodoEscolar} exact />
              <Route path="/usuario" component={Usuario} exact />
              <Route path="/notas" component={Notas} exact />
              <Route path="/notas/grupo/:grupoId/:materiaId" component={NotasEstudiante} exact />
              <Route path="/backup" component={Backup} exact />
              { /* Procesos */}
              <Route path="/inscripcion" component={Inscripcion} exact />
              <Route path="/inscripcion/form" component={FormInscripcion} exact />
              <Route path="/asistencia" component={Asistencia} exact />
              <Route path="/" component={Dashboard} exact />
              <Route path="/logout" exact>
                <Logout />
              </Route>
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </main>
      </Router>
    </div>
  )
}

export default App
