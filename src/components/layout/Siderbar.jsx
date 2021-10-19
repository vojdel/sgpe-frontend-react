import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faChild, faHome, faMale, faChalkboard, faChalkboardTeacher, faMapMarkedAlt, faSchool, faTimes, faUserAlt, faUserTie, faUser, faBars, faDoorClosed } from '@fortawesome/free-solid-svg-icons'
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
                <SiderOption nombre="Estado" icon={faMapMarkedAlt} list={true} link="/estado" handleMenu={handleMenu} />
                <SiderOption nombre="Municipio" icon={faMapMarkedAlt} list={true} link="/municipio" handleMenu={handleMenu} />
              </ul>
              <SiderOption nombre="Escuela" collapseOption="collapseEscuela" icon={faSchool} />
              <ul className="navbar-nav collapse" id="collapseEscuela">
                <SiderOption nombre="Grado" icon={faSchool} list={true} link="/grado" handleMenu={handleMenu} />
                {
                  // <SiderOption nombre="Salon" icon={faSchool} list={true} link="/salon" />
                }
                <SiderOption nombre="Seccion" icon={faSchool} list={true} link="/seccion" handleMenu={handleMenu} />
                <SiderOption nombre="Periodo Escolar" icon={faSchool} list={true} link="/periodoescolar" handleMenu={handleMenu} />
                <SiderOption nombre="Materia" icon={faSchool} list={true} link="/materia" handleMenu={handleMenu} />
              </ul>
              <SiderOption nombre="Personas" collapseOption="collapsePersona" icon={faMale} />
              <ul className="navbar-nav collapse" id="collapsePersona">
                <SiderOption nombre="Estudiante" icon={faChild} list={true} link="/estudiante" handleMenu={handleMenu} />
                <SiderOption nombre="Personal" icon={faUserTie} list={true} link="/personal" handleMenu={handleMenu} />
                <SiderOption nombre="Ocupación Laboral" icon={faUserTie} list={true} link="/ocupacionlaboral" handleMenu={handleMenu} />
                <SiderOption nombre="Representante" icon={faUserTie} list={true} link="/representante" handleMenu={handleMenu} />
                <SiderOption nombre="Cargo" icon={faUserTie} list={true} link="/cargo" handleMenu={handleMenu} />
                <SiderOption nombre="Usuarios" icon={faUser} list={true} link="/usuario" handleMenu={handleMenu} />
              </ul>
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Procesos</h6>
              </li>
              <SiderOption nombre="Inscripción" icon={faChalkboard} list={true} link="/inscripcion" handleMenu={handleMenu} />
              <SiderOption nombre="Asistencias" icon={faChalkboardTeacher} list={true} link="/asistencia" handleMenu={handleMenu} />
              <SiderOption nombre="Notas" icon={faChalkboardTeacher} list={true} link="/notas" handleMenu={handleMenu} />
              <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Account Pages</h6>
              </li>
              <SiderOption nombre="Profile" icon={faUserAlt} link="/" handleMenu={handleMenu} />
              <SiderOption nombre="Logout" icon={faDoorClosed} link="/logout" handleMenu={handleMenu} />
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
