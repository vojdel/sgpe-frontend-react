import { useLocation, useHistory } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { changeTitle } from '../../util/changeTitle'
import Menu from './Menu'
import NavLogin from '../Login/Nav'
import { AuthContext } from '../../context/AuthContext'

const Navbar = ({ handleSiderHidden, handleMenu }) => {
  const ruta = useLocation()
  let titulo = ''
  const history = useHistory()
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    if (typeof auth === 'boolean' && auth === false) {
      history.push('/signin')
    }
  }, [])

  useEffect(() => {
    titulo = changeTitle(ruta.pathname)
    console.log(ruta.pathname)
  }, [ruta])

  if (auth !== false) {
    return < Menu handleSiderHidden={handleSiderHidden} handleMenu={handleMenu} titulo={titulo} />
  } else {
    return <NavLogin />
  }
}

Navbar.propTypes = {
  handleSiderHidden: PropTypes.func,
  handleMenu: PropTypes.func
}

export default Navbar
