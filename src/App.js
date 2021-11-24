import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Suspense, lazy, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Siderbar from './components/layout/Siderbar'
import Navbar from './components/layout/Navbar'
import './App.css'
// import Footer from './components/layout/Footer'

const Municipio = lazy(() => import('./components/Municipio/Municipio'))
const Estado = lazy(() => import('./components/Estado/Estado'))
const PageNotFound = lazy(() => import('./components/PageNoFound'))
// const Home = lazy(() => import('./components/Home'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const Login = lazy(() => import('./components/Login/Login'))
const SignUp = lazy(() => import('./components/Registrar/Registrar'))
const Alergia = lazy(() => import('./components/Alergia/Alergia'))
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

// eslint-disable-next-line space-before-function-paren
function App() {
  const styleSiderHidden = {
    aside: 'sidenav navbat navbar-vertical navbar-expand-xs border-0 fixed-left d-none',
    main: '15.65rem',
    menu: true
  }

  const [styleAside, setStyleAside] = useState(styleSiderHidden)

  const tipoUser = window.localStorage.getItem('loggedUser')
  const tipo = JSON.parse(tipoUser).tipo

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

  const isLogin = () => {
    // if (window.localStorage.getItem('loggedUser')) {
    return (<div>
      <Siderbar
        estilo={styleAside.aside}
        handleMenu={handleMenu}
      />
      <Navbar
        handleSiderHidden={handleSiderHidden}
        handleMenu={handleMenu}
      />
    </div>)
    // } else {
    // return ''
    // }
  }

  return (
    <div className="g-sidenav-show bg-gray-100 min-vw-100">
      <Router>
        <main
          className="main-content border-radius-lg min-vh-100"
          style={{ marginLeft: '0px' }}>
          {isLogin()}
          <Suspense fallback={<div className="spinner"></div>}>
            <Switch>
              { /* <Route path="/" component={Home} exact /> */}
              <Route path="/signin" exact>
                <Login />
              </Route>
              <Route path="/signup" component={SignUp} exact />
              {(tipo === 'admin' || tipo === 'coordinador') ? < Route path="/estado" component={Estado} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/municipio" component={Municipio} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/alergia" component={Alergia} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/estudiante" component={Estudiante} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/representante" component={Representante} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/personal" component={Personal} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/cargo" component={Cargo} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/grado" component={Grado} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/seccion" component={Seccion} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/materia" component={Materia} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/ocupacionlaboral" component={OcupacionLaboral} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/periodoescolar" component={PeriodoEscolar} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/usuario" component={Usuario} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/notas" component={Notas} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/notas/grupo/:grupoId/:materiaId" component={NotasEstudiante} exact /> : null}
              {(tipo === 'admin' || tipo === 'coordinador') ? <Route path="/backup" component={Backup} exact /> : null}
              { /* Procesos */}
              {(tipo === 'admin' || tipo === 'secretaria') ? <Route path="/inscripcion" component={Inscripcion} exact /> : null}
              {(tipo === 'admin' || tipo === 'secretaria') ? <Route path="/inscripcion/form" component={FormInscripcion} exact /> : null}
              {(tipo === 'admin' || tipo === 'secretaria') ? <Route path="/asistencia" component={Asistencia} exact /> : null}
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
