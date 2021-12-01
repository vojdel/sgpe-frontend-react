import axios from 'axios'
import { getToken } from '../util/getToken'

/**
 * getAll.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros
 * @param {string} ruta
 * @return {Promise} los estados
 */
export const getAll = (ruta) => {
  const options = getToken('GET', `/api/${ruta}`)
  return axios.request(options)
}

/**
 * getAll.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros
 * @param {string} ruta
 * @param {string} busqueda
 * @return {Promise} los estados
 */
export const search = (ruta, busqueda) => {
  const options = getToken('GET', `/api/${ruta}/busqueda=${busqueda}`)
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
  const options = getToken('GET', `/api/${ruta}/${id}`)
  return axios.request(options).then((response) => {
    console.log(response.data)
    return response.data
  }).catch((error) => {
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
  const options = getToken('POST', `/api/${ruta}`)
  options.data = data
  return axios.request(options).then((response) => {
    console.log(response.data)
  }).catch((error) => {
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
  const options = getToken('PUT', `/api/${ruta}/${id}`)
  options.data = data
  return axios.request(options).then((response) => {
    console.log(response.data)
    return response.data
  }).catch((error) => {
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
  const options = getToken('DELETE', `/api/${ruta}/${id}`)
  return axios.request(options).then((response) => {
    console.log(response.data)
    return response.data
  }).catch((error) => {
    console.error(error)
    return error
  })
}

/**
 * download.
 *
 * @type {Function}
 * @description Descarga un archivo
 * @param {number} id
 * @param {string} ruta
 * @return {Promise}
 */
export const download = (id, ruta) => {
  const options = getToken('GET', `/api/${ruta}/${id}`)
  return axios.request(options)
}

/**
 * gragicoAnio.
 *
 * @type {Function}
 * @description Descarga un archivo
 * @param {string} ruta
 * @param {array} data
 * @return {Promise}
 */
export const graficoAnio = (ruta, data) => {
  const options = getToken('POST', `/api/${ruta}`)
  options.data = data
  return axios.request(options)
}
