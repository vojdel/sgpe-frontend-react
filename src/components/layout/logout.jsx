import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from '../../services/login.js'
import { AuthContext } from '../../context/AuthContext'

const Logout = () => {
  const history = useHistory()
  const { logout: exit } = useContext(AuthContext)

  const handleLogout = () => {
    exit()
    logout(history.push).catch(e => {
      console.log(e)
    })
  }

  useEffect(() => {
    handleLogout()
  }, [])

  return (
    <div>
      <h2>Gracias por usar esta aplicación</h2>
    </div>
  )
}

export default Logout
