import { faBars, faBell, faClock, faCog, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ handleSiderHidden, handleMenu }) => {
  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 px-2 shadow-none" id="navbarBlur" navbar-scroll="true" style={{ background: 'linear-gradient(90deg, rgba(50,4,4,1) 12%, rgba(121,9,18,1) 35%, rgba(170,1,32,1) 61%)' }}>
      <div className="container-fluid py-1 px-3">
        <div onClick={handleMenu}>
          <button className="btn btn-dark me-3 mb-0" style={{ background: 'transparent' }}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm">
              <a href="#" className="opacity-5 text-white">Pages</a>
            </li>
            <li className="breadcrumb-item text-sm">
              <Link to="/dashboard" className="opacity-5 text-white active" aria-current="page">Dashboard</Link>
            </li>
          </ol>
          <h6 className="font-weight-bolder mb-0 text-white">Dashboard</h6>
        </nav>
        <div className="collapse navbar-collapse mt-ms-0 mt-2 me-md-0 me-sm-4 justify-content-end" id="navbar">
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <Link to="/signin" className="nav-link text-body font-weight-bold px-0">
                <FontAwesomeIcon icon={faUser} className="me-sm-1 text-white" />
                <span className="d-sm-inline d-none text-white"> Sign In</span>
              </Link>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center" onClick={handleSiderHidden}>
              <a href="#" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line text-white"></i>
                  <i className="sidenav-toggler-line text-white"></i>
                  <i className="sidenav-toggler-line text-white"></i>
                </div>
              </a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <a href="#" className="nav-link text-body p-0">
                <FontAwesomeIcon icon={faCog} className="fixed-plugin-button-nav cursor-pointer text-white" />
              </a>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="#" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faBell} className="cursor-pointer text-white" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4">
                <li className="mb-2">
                  <a href="#" className="dropdown-item border-radius-md">
                    <div className="my-auto">
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from User
                      </h6>
                        <p className="text-xs text-seconday mb-0">
                          <FontAwesomeIcon icon={faClock} /> 13 minutes ago
                      </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className="dropdown-item border-radius-md">
                    <div className="d-flex py-1">
                      <div className="my-auto"></div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New album</span> by Trivium
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <FontAwesomeIcon icon={faClock} /> 1 day
    </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  handleSiderHidden: PropTypes.func,
  handleMenu: PropTypes.func
}

export default Navbar
