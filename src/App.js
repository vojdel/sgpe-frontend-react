import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Suspense, lazy, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Siderbar from './components/layout/Siderbar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const Municipio = lazy(() => import('./components/Municipio/Municipio'))
const Estado = lazy(() => import('./components/Estado/Estado'))
const Parroquia = lazy(() => import('./components/Parroquia/Parroquia'))
const TipoAlergia = lazy(() => import('./components/TipoAlergia/TipoAlergia'))
const TipoDiscapacidad = lazy(() => import('./components/TipoDiscapacidad/TipoDiscapacidad'))
const PageNotFound = lazy(() => import('./components/PageNoFound'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const SignIn = lazy(() => import('./components/Login/Login'))
const SignUp = lazy(() => import('./components/Registrar/Registrar'))
const Alergia = lazy(() => import('./components/Alergia/Alergia'))
const Discapacidad = lazy(() => import('./components/Discapacidad/Discapacidad'))

function App () {
  const styleSiderHidden = {
    aside: 'sidenav navbat navbar-vertical navbar-expand-xs border-0 fixed-left',
    main: '15.65rem',
    menu: true
  }

  const [styleAside, setStyleAside] = useState(styleSiderHidden)

  const handleSiderHidden = () => {
    if (styleAside.menu) {
      document.body.classList.add('g-sidenav-pinned')
      setStyleAside({
        ...styleAside,
        main: '0',
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
        main: '0px',
        aside: styleAside.aside + ' d-none',
        menu: false
      })
    } else {
      setStyleAside(styleSiderHidden)
    }
  }

  return (
    <div className="g-sidenav-show bg-gray-100 min-vw-100">
      <Router>
        <Siderbar
          estilo={styleAside.aside}
        />
        <main className="main-content border-radius-lg min-vh-100" style={{ marginLeft: styleAside.main }}>
          <Navbar
            handleSiderHidden={handleSiderHidden}
            handleMenu={handleMenu}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route path="/signin" component={SignIn} exact />
              <Route path="/signup" component={SignUp} exact />
              <Route path="/estado" component={Estado} exact />
              <Route path="/municipio" component={Municipio} exact />
              <Route path="/parroquia" component={Parroquia} exact />
              <Route path="/tipoalergia" component={TipoAlergia} exact />
              <Route path="/tipodiscapacidad" component={TipoDiscapacidad} exact />
              <Route path="/alergia" component={Alergia} exact />
              <Route path="/discapacidad" component={Discapacidad} exact />
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
