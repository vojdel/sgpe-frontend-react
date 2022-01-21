import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// faUserAlt
import { faHome, faSave, faTimes, faBars, faDoorClosed, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import SiderOption from './SiderOption'
import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { listaMaestro, listaProcesos } from '../../util/roles'

const Siderbar = ({ estilo, handleMenu }) => {
  const menuLateral = document.querySelector('#sidenav-main')
  const { auth, typeUser } = useContext(AuthContext)
  const tipo = typeUser ?? 0

  useEffect(() => {
    if (!auth && menuLateral) {
      menuLateral.classList.add('d-none')
    }
  }, [auth])

  return (
    <aside className={estilo} id="sidenav-main" style={{ background: '#000000' }}>
      <div className="sidenav-main">
        <div className="sidenav-header text-center">
          <FontAwesomeIcon icon={faTimes} className="p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
          <a href="#" className="navbar-brand m-0" style={{ fontSize: '20px' }}>
            <div onClick={handleMenu} className="d-inline-block" style={{ width: '35px', marginLeft: '-70px' }}>
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
            {tipo !== 2
              ? <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Maestros</h6>
              </li>
              : null
            }
            {listaMaestro.filter(maestro => maestro.can === tipo || tipo === 1).map((maestro, index) => (
              <div key={index} >
                <SiderOption nombre={maestro.name} collapseOption={maestro.collapse} icon={maestro.icon} />
                <ul className="navbar-nav collapse" id={maestro.collapse}>
                  {maestro.list.filter(m => m.can === tipo || tipo === 1).map((m, index) => (
                    <SiderOption nombre={m.name} icon={m.icon} list={true} link={m.link} handleMenu={handleMenu} key={index + 50} />
                  ))}
                </ul>
              </div>
            ))}
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Procesos</h6>
            </li>
            {listaProcesos.filter(proceso => proceso.can === tipo || tipo === 1).map((proceso, index) => (
              <SiderOption nombre={proceso.name} icon={proceso.icon} link={proceso.link} handleMenu={handleMenu} className="ms-0" key={index + 100} />
            ))}
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Reportes</h6>
            </li>
            <SiderOption nombre="Inscripciones" icon={faFilePdf} link="/" handleMenu={handleMenu} />
            <SiderOption nombre="Notas" icon={faFilePdf} link="/" handleMenu={handleMenu} />
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white">Account Pages</h6>
            </li>
            {tipo === 1 ? <SiderOption nombre="Respaldo" icon={faSave} link="/backup" handleMenu={handleMenu} /> : null}
            <SiderOption nombre="Logout" icon={faDoorClosed} link="/logout" handleMenu={handleMenu} />
            {// <SiderOption nombre="Configuaricones" icon={faSave} faFilePdf link="/" handleMenu={handleMenu} />
              // <SiderOption nombre="Perfil" icon={faUserAlt} link="/" handleMenu={handleMenu} />
            }
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
