import axios from 'axios'
import { getToken } from '../util/getToken'

/**
 * getAllEstado.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros
 * @returns {Promise} los estados
 */
export const getAllEstado = () => {
  const options = getToken('GET', 'http://localhost:8000/api/estado')
  return axios.request(options)
}

/**
 * getAllMunicpio.
 * @type {Function}
 * @description Hace una peticion para obtener todos los registros
 * @param {number} id
 * @returns {Promise} los estados
 */
export const getAllMunicpios = (id) => {
  const options = getToken('GET', `http://localhost:8000/api/municipio/${id}`)
  return axios.request(options)
}
