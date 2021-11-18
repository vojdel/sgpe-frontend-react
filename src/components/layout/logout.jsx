import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from '../../services/login.js'

const Logout = () => {
  const history = useHistory()

  const handleLogout = () => {
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
