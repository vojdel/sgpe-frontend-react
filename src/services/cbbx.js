import axios from 'axios'
import { getToken } from '../util/getToken'

/**
 * getAllEstado.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros estado
 * @returns {Promise} los estados
 */
export const getAllEstado = () => {
  const options = getToken('GET', 'http://localhost:8000/api/cbbx/estado')
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
  const options = getToken('GET', `http://localhost:8000/api/cbbx/municipio/${id}`)
  return axios.request(options)
}

/**
 * getAllGrados.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @returns {Promise} los estados
 */
export const getAllGrados = () => {
  const options = getToken('GET', 'http://localhost:8000/api/cbbx/grado')
  return axios.request(options)
}

/**
 * getAllOcupaciones.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @returns {Promise} los estados
 */
export const getAllOcupaciones = () => {
  const options = getToken('GET', 'http://localhost:8000/api/cbbx/ocupacionlaboral')
  return axios.request(options)
}

/**
 * getAllCargos.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @returns {Promise} los estados
 */
export const getAllCargos = () => {
  const options = getToken('GET', 'http://localhost:8000/api/cbbx/cargo')
  return axios.request(options)
}

/**
 * getAllEmpleados.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros de grado
 * @returns {Promise} los estados
 */
export const getAllEmpleados = () => {
  const options = getToken('GET', 'http://localhost:8000/api/cbbx/empleado')
  return axios.request(options)
}
