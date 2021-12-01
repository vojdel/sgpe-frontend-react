import { createContext, useReducer } from 'react'
import { authReducer } from '../reducers/authReducer'

const loggedUser = window.localStorage.getItem('loggedUser')

const initialState = {
  state: (loggedUser),
  username: '',
  typeUser: ''
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
