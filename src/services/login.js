import axios from 'axios'

/**
 * login.
 * @type {function}
 * @param {{email: string, password: string}} credentials
 * @param {function} resetiar
 * @param {function} route
 * @param {function} loginIn
 * @return {Promise}
 */
export const login = ({ email, password }, resetiar, route, loginIn) => {
  return axios.request({
    method: 'POST',
    url: 'http://127.0.0.1:8000/api/auth/login',
    headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
    data: { email: email[0], password: password[0] }
  }).then((response) => {
    console.log(response.data)
    return response.data
  }).then(data => {
    window.localStorage.setItem(
      'loggedUser', JSON.stringify(data)
    )
    resetiar({
      email: '',
      password: ''
    })
    console.log(data)
    loginIn({
      username: data.username,
      typeUser: data.tipo
    })
    route('/')
  })
}

/**
 * logout.
 *
 * @type {function}
 * @param {function} ruta
 * @return {Promise}
 */
export const logout = (ruta) => {
  const loggedToken = window.localStorage.getItem('loggedUser')
  const token = JSON.parse(loggedToken)
  const sidenav = document.querySelector('#sidenav-main')

  return axios.request({
    method: 'POST',
    url: 'http://127.0.0.1:8000/api/auth/me',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${token.access_token}`
    }
  }).then((response) => {
    console.log(response.data)
    window.localStorage.removeItem('loggedUser')
    ruta('/signin')
    sidenav.classList.add('d-none')
    return response.data
  })
}

/**
 * meUser.
 *
 * @type {function}
 * @return {Promise}
 */
export const meUser = () => {
  const loggedToken = window.localStorage.getItem('loggedUser')
  const token = JSON.parse(loggedToken)

  return axios.request({
    method: 'POST',
    url: 'http://127.0.0.1:8000/api/auth/me',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${token.access_token}`
    }
  }).then((response) => {
    console.log(response.data)
    return response.data
  })
}
