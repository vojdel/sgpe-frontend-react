const loggedUser = window.localStorage.getItem('loggedUser') || null
const logged = JSON.parse(loggedUser) || { username: '', tipo: 0 }

/**
 * authReducer.
 * @type {function}
 * @param {{ auth: boolean, username: string, typeUser: string }} state
 * @param {{ type: string, payload: object }} action
 * @return {Object}
 */

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':
      if (!loggedUser) {
        return { ...state, auth: false }
      }
      return {
        auth: true,
        username: logged.username,
        typeUser: logged.tipo
      }

    case 'LOGIN':
      console.log(action.payload)
      return { ...action.payload, auth: true }

    case 'LOGOUT':
      return {
        auth: false,
        username: '',
        typeUser: ''
      }

    default:
      return state
  }
}
