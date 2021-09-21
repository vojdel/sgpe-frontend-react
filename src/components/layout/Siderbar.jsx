import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChild, faHome, faKey, faMale, faChalkboard, faChalkboardTeacher, faMapMarkedAlt, faSchool, faTimes, faUserAlt, faUserCircle, faUserTie, faUser, faBars, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
import SiderOption from './SiderOption'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Siderbar = ({ estilo, handleMenu }) => {
  const ruta = useLocation()
  let url
  const menuLateral = document.querySelector('#sidenav-main')

  useEffect(() => {
    url = ruta.pathname
    console.log(url)
    if (url === '/signin' && menuLateral) {
      menuLateral.classList.add('d-none')
    }
  }, [ruta])

  if (url !== '/signin') {
    return (
      <aside className={estilo} id="sidenav-main" style={{ background: '#000000' }}>
        <div className="sidenav-main">
          <div className="sidenav-header text-center">
            <FontAwesomeIcon icon={faTimes} className="p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
            <a href="#" className="navbar-brand m-0" style={{ fontSize: '20px' }}>
              <div onClick={handleMenu} className="d-inline-block" style={{ width: '35px', marginLeft: '-70px' }}>
                <button className="btn btn-dark me-3 mb-0" style={{ background: 'transparent' }}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              <FontAwesomeIcon icon={faHome} className="navbar-brand-img h-100 text-white" />
              <span className="ms-1 font-weight-bold text-white">SGPE</span>
            </a>
          </div>
          <hr className="horizontal dark mt-0" />
          <div className="collapse navbar-collapse w-auto h-auto" id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Maestros</h6>
              </li>
              <SiderOption nombre="Dirección" collapseOption="collapseDireccion" icon={faAddressBook} />
              <ul className="navbar-nav collapse" id="collapseDireccion">
                <SiderOption nombre="Estado" icon={faMapMarkedAlt} list={true} link="/estado" />
                <SiderOption nombre="Municipio" icon={faMapMarkedAlt} list={true} link="/municipio" />
              </ul>
              <SiderOption nombre="Personas" collapseOption="collapsePersona" icon={faMale} />
              <ul className="navbar-nav collapse" id="collapsePersona">
                <SiderOption nombre="Estudiante" icon={faChild} list={true} link="/estudiante" />
                <SiderOption nombre="Usuarios" icon={faUser} list={true} link="/usuario" />
                <SiderOption nombre="Personal" icon={faUserTie} list={true} link="/personal" />
                <SiderOption nombre="Representante" icon={faUserTie} list={true} link="/representante" />
                <SiderOption nombre="Cargo" icon={faUserTie} list={true} link="/cargo" />
              </ul>
              <SiderOption nombre="Escuela" collapseOption="collapseEscuela" icon={faSchool} />
              <ul className="navbar-nav collapse" id="collapseEscuela">
                <SiderOption nombre="Grado" icon={faSchool} list={true} link="/grado" />
                <SiderOption nombre="Salon" icon={faSchool} list={true} link="/salon" />
                <SiderOption nombre="Seccion" icon={faSchool} list={true} link="/seccion" />
                <SiderOption nombre="Periodo Escolar" icon={faSchool} list={true} link="/peridoescolar" />
                <SiderOption nombre="Materia" icon={faSchool} list={true} link="/materia" />
              </ul>
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Procesos</h6>
              </li>
              <SiderOption nombre="Inscripción" icon={faChalkboard} link="/" />
              <SiderOption nombre="Horarios" icon={faChalkboard} link="/" />
              <SiderOption nombre="Asistencias" icon={faChalkboardTeacher} link="/" />
              <SiderOption nombre="Permisos" icon={faChalkboardTeacher} link="/" />
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Account Pages</h6>
              </li>
              <SiderOption nombre="Profile" icon={faUserAlt} link="/" />
              <SiderOption nombre="Sign In" icon={faKey} link="/signin" />
              <SiderOption nombre="Sign Up" icon={faUserCircle} link="/signup" />
              <SiderOption nombre="Logout" icon={faDoorClosed} link="/logout" />
            </ul >
          </div >
        </div >
      </aside >
    )
  }
}

Siderbar.propTypes = {
  estilo: PropTypes.string,
  handleMenu: PropTypes.func.isRequired
}

export default Siderbar
