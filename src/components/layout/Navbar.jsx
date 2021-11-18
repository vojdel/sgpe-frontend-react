import { useLocation, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { changeTitle } from '../../util/changeTitle'
import Menu from './Menu'
import NavLogin from '../Login/Nav'

const Navbar = ({ handleSiderHidden, handleMenu }) => {
  const ruta = useLocation()
  let titulo = changeTitle(ruta.pathname)
  const history = useHistory()

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedUser')
    console.log(JSON.parse(loggedUserJson))
    if (!loggedUserJson) {
      history.push('/signin')
    }
  }, [])

  useEffect(() => {
    titulo = changeTitle(ruta.pathname)
  }, [ruta])

  if (ruta.pathname !== '/signin') {
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
