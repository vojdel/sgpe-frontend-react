import { createContext, useReducer } from 'react'
import { authReducer } from '../reducers/authReducer'

const loggedUser = window.localStorage.getItem('loggedUser')
const logged = JSON.parse(loggedUser) || { username: '', tipo: 0 }
let isAuth = false

if (loggedUser) {
  isAuth = !!loggedUser
}

const initialState = {
  auth: isAuth,
  username: logged.username,
  typeUser: logged.tipo
}

export const AuthContext = createContext(initialState)

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const authenticated = () =>
    dispatch({ type: 'AUTHENTICATED' })

  const logged = (user) => {
    console.log(user)
    dispatch({ type: 'LOGIN', payload: user })
  }

  const logout = () =>
    dispatch({ type: 'LOGOUT' })

  return (
    <AuthContext.Provider value={{ ...state, authenticated, logged, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
