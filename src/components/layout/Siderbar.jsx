import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome, faKey, faTimes, faUserAlt, faUserCircle} from "@fortawesome/free-solid-svg-icons";

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
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faHome} />
                </div>
                <span className="nav-link-text ms-1">Item 1</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faHome} />
                </div>
                <span className="nav-link-text ms-1">Item 1</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faHome} /></div>
                <span className="nav-link-text ms-1">Item 1</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={faHome} /></div>
                <span className="nav-link-text ms-1">Item 1</span>
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
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Siderbar;
