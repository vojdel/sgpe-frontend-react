import axios from 'axios'
import { getToken } from '../util/getToken'
import { URL_API } from '../util/config'

/**
 * getAllEstado.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros estado
 * @returns {Promise} los estados
 */
export const getAllEstado = () => {
  const options = getToken('GET', `${URL_API}/api/cbbx/estado`)
  return axios.request(options)
}

/**
 * getAllMunicpio.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de municipio
 * @param {number} id
 * @returns {Promise} los estados
 */
export const getAllMunicpios = (id) => {
  const options = getToken('GET', `${URL_API}/api/cbbx/municipio/${id}`)
  return axios.request(options)
}

/**
 * getAllGrados.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @returns {Promise} los estados
 */
export const getAllGrados = () => {
  const options = getToken('GET', `${URL_API}/api/cbbx/grado`)
  return axios.request(options)
}

/**
 * getAllOcupaciones.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @returns {Promise} los estados
 */
export const getAllOcupaciones = () => {
  const options = getToken('GET', `${URL_API}/api/cbbx/ocupacionlaboral`)
  return axios.request(options)
}

/**
 * getAllCargos.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @returns {Promise} los estados
 */
export const getAllCargos = () => {
  const options = getToken('GET', `${URL_API}/api/cbbx/cargo`)
  return axios.request(options)
}

/**
 * getAllEmpleados.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @returns {Promise} los estados
 */
export const getAllEmpleados = (users = false) => {
  const options = getToken('GET', `${URL_API}/api/cbbx/empleado/users=${users}`)
  return axios.request(options)
}

/**
 * getAllSecciones.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @param {number} id
 * @returns {Promise} los estados
 */
export const getAllSecciones = (id) => {
  const options = getToken('GET', `${URL_API}/api/cbbx/seccion/${id}`)
  return axios.request(options)
}

/**
 * getAllPeriodoEscolares.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @returns {Promise} los estados
 */
export const getAllPeriodoEscolares = () => {
  const options = getToken('GET', `${URL_API}/api/cbbx/periodoescolar`)
  return axios.request(options)
}

/**
 * getAllParentescos.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de parencos
 * @returns {Promise} los Parentesco posibles
 */
export const getAllParentescos = () => {
  const options = getToken('GET', `${URL_API}/api/cbbx/parentescos`)
  return axios.request(options)
}

/**
 * getAllMateria.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de parencos
 * @returns {Promise} los Parentesco posibles
 */
export const getAllMateria = () => {
  const options = getToken('GET', `${URL_API}/api/cbbx/materia`)
  return axios.request(options)
}
