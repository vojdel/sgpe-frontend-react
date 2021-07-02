import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAddressBook, faBlind, faChild, faHeadSideCough, faHome, faKey, faMale, faChalkboard, faChalkboardTeacher, faMapMarkedAlt, faSchool, faStethoscope, faTimes, faUserAlt, faUserCircle, faUserTie} from "@fortawesome/free-solid-svg-icons";

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
            <li className="nav-item">
              <a href="#" className="nav-link active" data-bs-toggle="collapse" href="#collapseDireccion" role="button" aria-expanded="false" aria-controls="collapseDireccion">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faAddressBook} />
                </div>
                <span className="nav-link-text ms-1">Dirección</span>
              </a>
            </li>
            <ul className="navbar-nav collapse" id="collapseDireccion">
              <li className="nav-item">
                <a href="#" className="nav-link ps-4">
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <span className="nav-link-text ms-1">Estado</span>
                </a>
              </li>
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div >
                  <span className="nav-link-text ms-1">Municipio</span >
                </a >
              </li >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div >
                  <span className="nav-link-text ms-1">Parroquia</span >
                </a >
              </li >
            </ul >
            <li className="nav-item">
              <a href="#" className="nav-link" data-bs-toggle="collapse" href="#collapsePersona" role="button" aria-expanded="false" aria-controls="collapsePersona">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faMale} />
                </div>
                <span className="nav-link-text ms-1">Personas</span>
              </a>
            </li>
            <ul className="navbar-nav collapse" id="collapsePersona" >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faChild} />
                  </div >
                  <span className="nav-link-text ms-1" > estudiante</span >
                </a >
              </li >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faUserTie} />
                  </div >
                  <span className="nav-link-text ms-1" > empleado</span >
                </a >
              </li >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faUserTie} />
                  </div >
                  <span className="nav-link-text ms-1" > representante</span >
                </a >
              </li >
            </ul >
            <li className="nav-item">
              <a href="" className="nav-link" data-bs-toggle="collapse" href="#collapseEnfermedades" role="button" aria-expanded="false" aria-controls="collapseEnfermedades">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faStethoscope} /></div>
                <span className="nav-link-text ms-1">Enfermedades</span>
              </a>
            </li>
            <ul className="navbar-nav collapse" id="collapseEnfermedades" >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faHeadSideCough} />
                  </div >
                  <span className="nav-link-text ms-1">Tipo de Alergias</span >
                </a >
              </li >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faHeadSideCough} />
                  </div >
                  <span className="nav-link-text ms-1">Alergias</span >
                </a >
              </li >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4 w-100">
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faBlind} />
                  </div>
                  <span className="nav-link-text ms-1">Tipo de Discapacidad</span >
                </a >
              </li >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faBlind} />
                  </div >
                  <span className="nav-link-text ms-1">Discapacidad</span >
                </a>
              </li>
            </ul>
            <li className="nav-item">
              <a href="" className="nav-link" data-bs-toggle="collapse" href="#collapseEscuela" role="button" aria-expanded="false" aria-controls="collapseEscuela">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faSchool} /></div>
                <span className="nav-link-text ms-1">Escuela</span>
              </a>
            </li>
            <ul className="navbar-nav collapse" id="collapseEscuela">
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faSchool} />
                  </div >
                  <span className="nav-link-text ms-1">Salon</span >
                </a >
              </li >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faSchool} />
                  </div >
                  <span className="nav-link-text ms-1">Grado</span >
                </a >
              </li >
              <li className="nav-item" >
                <a href="#" className="nav-link ps-4" >
                  <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center ms-3" >
                    <FontAwesomeIcon icon={faSchool} />
                  </div >
                  <span className="nav-link-text ms-1">Periodo Escolar</span >
                </a>
              </li>
            </ul>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white"> Procesos</h6>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faChalkboard} /></div>
                <span className="nav-link-text ms-1">Horarios</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faChalkboardTeacher} /></div>
                <span className="nav-link-text ms-1">Asistencias</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faChalkboardTeacher} /></div>
                <span className="nav-link-text ms-1">Permiso</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Account Pages</h6>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faUserAlt} />
                </span>
                <span className="nav-lin-text ms-1">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faKey} />
                </span>
                <span className="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faUserCircle} />
                </span>
                <span className="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul >
        </div >
      </div >
    </aside >
  );
}

export default Siderbar;
