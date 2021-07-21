import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBlind, faChild, faHeadSideCough, faHome, faKey, faMale, faChalkboard, faChalkboardTeacher, faMapMarkedAlt, faSchool, faStethoscope, faTimes, faUserAlt, faUserCircle, faUserTie, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import SiderOption from './SiderOption'
import PropTypes from 'prop-types'

const Siderbar = ({ estilo, handleMenu }) => {
  return (
    <aside className={estilo} id="sidenav-main" style={{ background: '#000000' }}>
      <div className="sidenav-main">
        <div className="sidenav-header text-center">
          <FontAwesomeIcon icon={faTimes} className="p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
          <a href="#" className="navbar-brand m-0" style={{ fontSize: '20px' }}>
            <div onClick={handleMenu} className="d-inline-block" style={{ width: '35px' }}>
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
              <SiderOption nombre="Parroquia" icon={faMapMarkedAlt} list={true} link="/parroquia" />
            </ul>
            <SiderOption nombre="Personas" collapseOption="collapsePersona" icon={faMale} />
            <ul className="navbar-nav collapse" id="collapsePersona">
              <SiderOption nombre="Estudiante" icon={faChild} list={true} />
              <SiderOption nombre="Usuarios" icon={faUser} list={true} />
              <SiderOption nombre="Empleado" icon={faUserTie} list={true} />
              <SiderOption nombre="Representante" icon={faUserTie} list={true} />
              <SiderOption nombre="Cargo" icon={faUserTie} list={true} />
            </ul>
            <SiderOption nombre="Salud del Estudiante" collapseOption="collapseEnfermedades" icon={faStethoscope} />
            <ul className="navbar-nav collapse" id="collapseEnfermedades">
              <SiderOption nombre="Tipo de Alergias" icon={faHeadSideCough} list={true} link="/tipoalergia" />
              <SiderOption nombre="Tipo de Discapacidad" icon={faBlind} list={true} link="/tipodiscapacidad" />
              <SiderOption nombre="Alergias" icon={faHeadSideCough} list={true} link="/alergia" />
              <SiderOption nombre="Discapacidad" icon={faBlind} list={true} link="/discapacidad" />
            </ul>
            <SiderOption nombre="Escuela" collapseOption="collapseEscuela" icon={faSchool} />
            <ul className="navbar-nav collapse" id="collapseEscuela">
              <SiderOption nombre="Grado" icon={faSchool} list={true} />
              <SiderOption nombre="Salon" icon={faSchool} list={true} />
              <SiderOption nombre="Seccion" icon={faSchool} list={true} />
              <SiderOption nombre="Periodo Escolar" icon={faSchool} list={true} />
            </ul>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Procesos</h6>
            </li>
            <SiderOption nombre="Inscripción" icon={faChalkboard} />
            <SiderOption nombre="Horarios" icon={faChalkboard} />
            <SiderOption nombre="Asistencias" icon={faChalkboardTeacher} />
            <SiderOption nombre="Permisos" icon={faChalkboardTeacher} />
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Account Pages</h6>
            </li>
            <SiderOption nombre="Profile" icon={faUserAlt} />
            <SiderOption nombre="Sign In" icon={faKey} link="/signin" />
            <SiderOption nombre="Sign Up" icon={faUserCircle} link="/signup" />
          </ul >
        </div >
      </div >
    </aside >
  )
}

Siderbar.propTypes = {
  estilo: PropTypes.string,
  handleMenu: PropTypes.func.isRequired
}

export default Siderbar
