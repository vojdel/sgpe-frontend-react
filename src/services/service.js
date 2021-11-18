import axios from 'axios'
import { getToken } from '../util/getToken'

/**
 * getAll.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros
 * @param {string} ruta
 * @returns {Promise} los estados
 */
export const getAll = (ruta) => {
  const options = getToken('GET', `http://localhost:8000/api/${ruta}`)
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
  const options = getToken('GET', `http://localhost:8000/api/${ruta}/busqueda=${busqueda}`)
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
  const options = getToken('GET', `http://localhost:8000/api/${ruta}/${id}`)
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
  const options = getToken('POST', `http://localhost:8000/api/${ruta}`)
  options.data = data
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
  const options = getToken('PUT', `http://localhost:8000/api/${ruta}/${id}`)
  options.data = data
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
  const options = getToken('DELETE', `http://localhost:8000/api/${ruta}/${id}`)
  return axios.request(options).then(function (response) {
    console.log(response.data)
    return response.data
  }).catch(function (error) {
    console.error(error)
    return error
  })
}
