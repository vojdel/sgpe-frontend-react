import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAddressBook, faBlind, faChild, faHeadSideCough, faHome, faKey, faMale, faChalkboard, faChalkboardTeacher, faMapMarkedAlt, faSchool, faStethoscope, faTimes, faUserAlt, faUserCircle, faUserTie} from "@fortawesome/free-solid-svg-icons";
import SiderOption from './SiderOption';

const Siderbar = ({estilo}) => {

  return (
    <aside className={estilo} id="sidenav-main" style={{background: '#000000e6'}}>
      <div className="sidenav-main">
        <div className="sidenav-header text-center">
          <FontAwesomeIcon icon={faTimes} className="p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
          <a href="#" className="navbar-brand m-0" style={{fontSize: '20px'}}>
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
              <SiderOption nombre="Estado" icon={faMapMarkedAlt} list={true} />
              <SiderOption nombre="Municipio" icon={faMapMarkedAlt} list={true} />
              <SiderOption nombre="Parroquia" icon={faMapMarkedAlt} list={true} />
            </ul>
            <SiderOption nombre="Personas" collapseOption="collapsePersona" icon={faMale} />
            <ul className="navbar-nav collapse" id="collapsePersona">
              <SiderOption nombre="Estudiante" icon={faChild} list={true} />
              <SiderOption nombre="Empleado" icon={faUserTie} list={true} />
              <SiderOption nombre="Representante" icon={faUserTie} list={true} />
            </ul>
            <SiderOption nombre="Enfermedades" collapseOption="collapseEnfermedades" icon={faStethoscope} />
            <ul className="navbar-nav collapse" id="collapseEnfermedades">
              <SiderOption nombre="Tipo de Alergias" icon={faHeadSideCough} list={true} />
              <SiderOption nombre="Tipo de Discapacidad" icon={faBlind} list={true} />
              <SiderOption nombre="Alergias" icon={faHeadSideCough} list={true} />
              <SiderOption nombre="Discapacidad" icon={faBlind} list={true} />
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
            <SiderOption nombre="Horarios" icon={faChalkboard} />
            <SiderOption nombre="Asistencias" icon={faChalkboardTeacher} />
            <SiderOption nombre="Permisos" icon={faChalkboardTeacher} />
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Account Pages</h6>
            </li>
            <SiderOption nombre="Profile" icon={faUserAlt} />
            <SiderOption nombre="Sign In" icon={faKey} />
            <SiderOption nombre="Sign Up" icon={faUserCircle} />
          </ul >
        </div >
      </div >
    </aside >
  );
}

export default Siderbar;
