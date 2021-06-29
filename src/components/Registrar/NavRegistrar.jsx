import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChartPie, faHome, faKey, faUserCircle} from '@fortawesome/free-solid-svg-icons';

const NavLogout = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbr-transparent mt-4">
      <div className="container">
        <a href="#" className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white">
          <FontAwesomeIcon icon={faHome} /> SGPE
        </a>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav d-lg-block d-none">
            <li className="nav-item">
              <a href="#" className="btn btn-sm btn-round mb-0 me-1 bg-gradient-light">
                Sistema de Gestión de Profesores y Estudiantes
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center me-2 active text-white" aria-current="page">
                <FontAwesomeIcon icon={faChartPie} /> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link me-2 text-white">
                <FontAwesomeIcon icon={faUserCircle} /> Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link me-2 opacity-6 text-white">
                <FontAwesomeIcon icon={faKey} /> Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavLogout;
