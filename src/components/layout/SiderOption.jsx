import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const SiderOption = ({nombre, collapseOption, icon, list}) => {

  const estilo = (list) ? 'nav-link ps-4 w-100 py-1' : 'nav-link';

  if (collapseOption) {
    return (
      <li className="nav-item">
        <a href="#" className="nav-link" data-bs-toggle="collapse" href={'#' + collapseOption} role="button" aria-expanded="false" aria-controls={collapseOption}>
          <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span className="nav-link-text ms-1">{nombre}</span>
        </a>
      </li>
    )
  } else {
    return (
      <li className="nav-item">
        <a href="#" className={estilo}>
          <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span className="nav-link-text ms-1">{nombre}</span>
        </a>
      </li>
    )
  }
}
export default SiderOption
