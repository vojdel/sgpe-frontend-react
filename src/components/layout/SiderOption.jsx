import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useState} from "react";
import {Link} from "react-router-dom";

const SiderOption = ({nombre, collapseOption, icon, list, link}) => {

  const estilo = {
    style: (list) ? 'nav-link ps-4 w-100 py-1' : 'nav-link',
    boolean: true
  }

  const [styleLink, setStyleLink] = useState(estilo)

  const active = () => {
    if (styleLink.boolean) {
      setStyleLink({
        ...styleLink,
        style: styleLink.style + " active",
        boolean: false
      })
    } else {
      setStyleLink(estilo)
    }
  }

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
        <Link to={link} replace={true} className={styleLink.style} onClick={active} >
          <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span className="nav-link-text ms-1">{nombre}</span>
        </Link>
      </li>
    )
  }
}
export default SiderOption
