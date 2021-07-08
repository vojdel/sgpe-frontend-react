import React, { Suspense, lazy, useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Siderbar from './layout/Siderbar'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const Municipio = lazy(() => import('./Municipio/Municipio'))
const Estado = lazy(() => import('./Estado/Estado'))
const Parroquia = lazy(() => import('./Parroquia/Parroquia'))
const TipoAlergia = lazy(() => import('./TipoAlergia/TipoAlergia'))
const TipoDiscapacidad = lazy(() => import('./TipoDiscapacidad/TipoDiscapacidad'))
const PageNotFound = lazy(() => import('./PageNoFound'))
const Dashboard = lazy(() => import('./Dashboard'))
const SignIn = lazy(() => import('./Login/Login'))
const SignUp = lazy(() => import('./Registrar/Registrar'))

const Layout = () => {
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
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
          <Footer />
        </main>
      </Router>
    </div>
  )
}
export default Layout
