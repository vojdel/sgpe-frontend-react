import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Suspense, lazy, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Siderbar from './components/layout/Siderbar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const Municipio = lazy(() => import('./components/Municipio/Municipio'))
const Estado = lazy(() => import('./components/Estado/Estado'))
const PageNotFound = lazy(() => import('./components/PageNoFound'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const SignIn = lazy(() => import('./components/Login/Login'))
const SignUp = lazy(() => import('./components/Registrar/Registrar'))
const Alergia = lazy(() => import('./components/Alergia/Alergia'))
const Estudiante = lazy(() => import('./components/Estudiante/Estudiante'))
const Representante = lazy(() => import('./components/Representante/Representante'))

function App () {
  const styleSiderHidden = {
    aside: 'sidenav navbat navbar-vertical navbar-expand-xs border-0 fixed-left d-none',
    main: '15.65rem',
    menu: true
  }

  const [styleAside, setStyleAside] = useState(styleSiderHidden)

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
    const rutas = ['/signin', '/signup']
    if (!rutas.includes(document.location.pathname)) {
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
    } else {
      return ''
    }
  }

  return (
    <div className="g-sidenav-show bg-gray-100 min-vw-100">
      <Router>
        <main className="main-content border-radius-lg min-vh-100" style={{ marginLeft: '0px' }}>
          {isLogin()}
          <Suspense fallback={<div className="spinner"></div>}>
            <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route path="/signin" component={SignIn} exact />
              <Route path="/signup" component={SignUp} exact />
              <Route path="/estado" component={Estado} exact />
              <Route path="/municipio" component={Municipio} exact />
              <Route path="/alergia" component={Alergia} exact />
              <Route path="/estudiante" component={Estudiante} exact />
              <Route path="/representante" component={Representante} exact />
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
          <Footer />
        </main>
      </Router>
    </div>
  )
}

export default App
