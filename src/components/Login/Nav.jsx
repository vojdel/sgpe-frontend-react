import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faChartPie, faHome, faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
      <div className="container container-fluid">
        <a href="" className="navbar-brand font-weight-bolder ms-lg-0 ms-3" href="#">
          <FontAwesomeIcon icon={faHome} /> SGPE
              </a>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggle-bar1"></span>
            <span className="navbar-toggle-bar2"></span>
            <span className="navbar-toggle-bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav d-lg-block d-none">
            <li className="nav-item">Sistema de Gestion de Profesores y Estudiantes</li>
          </ul>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center me-2 activate" aria-current="page">
                <FontAwesomeIcon icon={faChartPie} className="opacity-6 text-dark me-1" /> Dashboard
                    </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link me-2">
                <FontAwesomeIcon icon={faUserCircle} /> Sign up
                    </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link me-2">
                <FontAwesomeIcon icon={faKey} /> Sign in
                    </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
