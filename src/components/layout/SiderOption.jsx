import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SiderOption = ({ nombre, collapseOption, icon, list, link }) => {
  const estilo = (list) ? 'nav-link ps-4 w-100 py-1' : 'nav-link'

  /**
    * @returns {void}
    * */
  const handleClick = (event) => {
    if (list) {
      const active = event.target
      if (!document.querySelector('a.nav-link.active')) {
        active.classList.add('active')
      } else {
        const disabled = document.querySelector('a.nav-link.active')
        disabled.classList.remove('active')
        active.classList.add('active')
      }
    }
  }

  if (collapseOption) {
    return (
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="collapse" href={'#' + collapseOption} role="button" aria-expanded="false" aria-controls={collapseOption} onClick={handleClick}>
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
        <Link to={link} replace={true} className={estilo} onClick={handleClick}>
          <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span className="nav-link-text ms-1">{nombre}</span>
        </Link>
      </li>
    )
  }
}

SiderOption.propTypes = {
  nombre: PropTypes.string,
  collapseOption: PropTypes.string,
  icon: PropTypes.any,
  list: PropTypes.bool,
  link: PropTypes.string
}

export default SiderOption
