import axios from 'axios'

/**
 * getAll.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros
 * @param {string} ruta
 * @returns {Promise} los estados
 */
export const getAll = (ruta) => {
  const loggedToken = window.localStorage.getItem('loggedUser')
  const token = JSON.parse(loggedToken)

  const options = {
    method: 'GET',
    url: `http://localhost:8000/api/${ruta}`,
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${token.access_token}`
    }
  }
  return axios.request(options)
}

/**
 * getAll.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros
 * @param {string} ruta
 * @param {string} busqueda
 * @returns {Promise} los estados
 */
export const search = (ruta, busqueda) => {
  const loggedToken = window.localStorage.getItem('loggedUser')
  const token = JSON.parse(loggedToken)

  const options = {
    method: 'GET',
    url: `http://localhost:8000/api/${ruta}/busqueda=${busqueda}`,
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${token.access_token}`
    }
  }
  return axios.request(options)
}

/**
 * getOne.
 *
 * @type {Function}
 * @description Obtiene un unico registro
 * @param {number} id
 * @param {string} ruta
 * @return {Promise}
 */
export const getOne = (id, ruta) => {
  const loggedToken = window.localStorage.getItem('loggedUser')
  const token = JSON.parse(loggedToken)

  const options = {
    method: 'GET',
    url: `http://localhost:8000/api/${ruta}/${id}`,
    headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest', Authorization: `Bearer ${token.access_token}` }
  }

  return axios.request(options).then(function (response) {
    console.log(response.data)
    return response.data
  }).catch(function (error) {
    console.error(error)
    return error
  })
}

/**
 * create.
 *
 * @type {Function}
 * @description Crea un registro
 * @param {string} ruta
 * @param {object} data
 * @return {Promise}
 */
export const create = (ruta, data) => {
  const loggedToken = window.localStorage.getItem('loggedUser')
  const token = JSON.parse(loggedToken)

  const options = {
    method: 'POST',
    url: `http://localhost:8000/api/${ruta}`,
    headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', Authorization: `Bearer ${token.access_token}` },
    data: data
  }

  return axios.request(options).then(function (response) {
    console.log(response.data)
  }).catch(function (error) {
    console.error(error)
  })
}

/**
 * update.
 *
 * @type {Function}
 * @description Modifica un registro
 * @param {number} id
 * @param {string} ruta
 * @param {object} data
 * @return {Promise}
 */
export const update = (id, ruta, data) => {
  const loggedToken = window.localStorage.getItem('loggedUser')
  const token = JSON.parse(loggedToken)

  const options = {
    method: 'PUT',
    url: `http://localhost:8000/api/${ruta}/${id}`,
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`
    },
    data: data
  }

  return axios.request(options).then(function (response) {
    console.log(response.data)
    return response.data
  }).catch(function (error) {
    console.error(error)
    return error
  })
}

/**
 * destroy.
 *
 * @type {Function}
 * @description Elimina un registro
 * @param {number} id
 * @param {string} ruta
 * @return {Promise}
 */
export const destroy = (id, ruta) => {
  const loggedToken = window.localStorage.getItem('loggedUser')
  const token = JSON.parse(loggedToken)

  const options = {
    method: 'DELETE',
    url: `http://localhost:8000/api/${ruta}/${id}`,
    headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest', Authorization: `Bearer ${token.access_token}` }
  }

  return axios.request(options).then(function (response) {
    console.log(response.data)
    return response.data
  }).catch(function (error) {
    console.error(error)
    return error
  })
}
