import axios from 'axios'
import { getToken } from '../util/getToken'
import { URL_API } from '../util/config'

/**
 * getEstudiante.
 * @type {Function}
 * @description Hace una peticion para obtener al estudiante de la inscripción
 * @param {string} cedula
 * @returns {Promise} El estudiante
 */
export const getEstudiante = (cedula) => {
  const options = getToken('GET', `${URL_API}/api/inscripcion/estudiante/${cedula}`)
  return axios.request(options)
}

/**
 * getRepresentante.
 * @type {Function}
 * @description Hace una peticion para obtener al representante del estudiante
 * @param {string} cedula
 * @returns {Promise} El Representante
 */
export const getRepresentante = (cedula) => {
  const options = getToken('GET', `${URL_API}/api/inscripcion/representante/${cedula}`)
  return axios.request(options)
}
