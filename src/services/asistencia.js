import axios from 'axios'
import { getToken } from '../util/getToken'

/**
 * getAll.
 *
 * @param {number|string} start
 * @param {number|string} end
 * @param {number|string} month
 * @param {number|string} year
 * @return {Promise}
 */
export const getAll = (start, end, month, year) => {
  const options = getToken('GET', `http://localhost:8000/api/asistencia/start=${start}&end=${end}&month=${month}&year=${year}`)
  return axios.request(options)
}

/**
 * getEmpleados.
 *
 * @param {number} edit 1 si esta editando, 0 si no
 * @return {Promise}
 */
export const getEmpleados = (edit) => {
  const options = getToken('GET', `http://localhost:8000/api/asistencia/empleado/${edit}`)
  return axios.request(options)
}

/**
 * getAllDays.
 *
 * @param {number} fecha
 * @return {Promise}
 */
export const getAllDays = (fecha) => {
  const options = getToken('GET', `http://localhost:8000/api/asistencia/allday/${fecha}`)
  return axios.request(options)
}

/**
 * getOne.
 *
 * @param {number} id
 * @return {Promise}
 */
export const getOne = (id) => {
  const options = getToken('GET', `http://localhost:8000/api/asistencia/${id}`)
  return axios.request(options)
}

/**
 * create.
 *
 * @param {{fecha: string, asistio: Boolean, motivo: string, empleado_id: number}} data
 * @return {Promise}
 */
export const create = (data) => {
  const options = getToken('POST', 'http://localhost:8000/api/asistencia/')
  options.data = data

  return axios.request(options)
}

/**
 * update.
 *
 * @param {number} id
 * @param {{fecha: string, asistio: Boolean, motivo: string, empleado_id: number}} data
 * @return {Promise}
 */
export const update = (id, data) => {
  const options = getToken('PUT', `http://localhost:8000/api/asistencia/${id}`)
  options.data = data

  return axios.request(options)
}

/**
 * destroy.
 *
 * @param {number} id
 * @return {Promise}
 */
export const destroy = (id) => {
  const options = getToken('DELETE', `http://localhost:8000/api/asistencia/${id}`)
  return axios.request(options)
}
