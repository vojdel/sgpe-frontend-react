import axios from 'axios'
import { getToken } from '../util/getToken'
import { URL_API } from '../util/config'

/**
 * getAll.
 *
 * @return {Promise}
 */
export const getAll = () => {
  const options = getToken('GET', `${URL_API}/api/notas`)
  return axios.request(options)
}

/**
 * getSearch.
 *
 * @param {number|string} periodo
 * @param {number|string} seccion
 * @return {Promise}
 */
export const getSearch = (periodo, seccion) => {
  const options = getToken('GET', `${URL_API}/api/notas/periodo=${periodo}&seccion=${seccion}`)
  return axios.request(options)
}

/**
 * getGrupo.
 *
 * @param {number|string} id
 * @return {Promise}
 */
export const getGrupo = (id) => {
  const options = getToken('GET', `${URL_API}/api/notas/${id}`)
  return axios.request(options)
}

/**
 * getNotas.
 *
 * @param {number|string} id
 * @param {number|string} materia
 * @return {Promise}
 */
export const getNotas = (id, materia) => {
  const options = getToken('GET', `${URL_API}/api/notas/notas/${id}/${materia}`)
  return axios.request(options)
}

/**
 * getNotasEstudiante.
 *
 * @param {number|string} id
 * @param {number|string} materia
 * @return {Promise}
 */
export const getNotasEstudiante = (id, materia) => {
  const options = getToken('GET', `${URL_API}/api/notas/estudiante/${id}/${materia}`)
  return axios.request(options)
}

/**
 * createNotaGrupo.
 *
 * @param {object} data
 * @return {Promise}
 */
export const createNotaGrupo = (data) => {
  const options = getToken('POST', `${URL_API}/api/notas/`)
  options.data = data
  return axios.request(options)
}

/**
 * createNotaEstudiante.
 *
 * @param {object} data
 * @return {Promise}
 */
export const createNotaEstudiante = (data) => {
  const options = getToken('POST', `${URL_API}/api/notas/valor`)
  options.data = data
  return axios.request(options)
}

/**
 * updateNotasGrupo.
 *
 * @param {number} id
 * @param {object} data
 * @return {Promise}
 */
export const updateNotasGrupo = (id, data) => {
  const options = getToken('PUT', `${URL_API}/api/notas/${id}`)
  options.data = data
  return axios.request(options)
}

/**
 * updateNotasEstudiante.
 *
 * @param {number} id
 * @param {object} data
 * @return {Promise}
 */
export const updateNotasEstudiante = (id, data) => {
  const options = getToken('PUT', `${URL_API}/api/notas/uptadenotas/${id}`)
  options.data = data
  return axios.request(options)
}

/**
 * destroy.
 *
 * @param {number|string} id
 * @return {Promise}
 */
export const destroy = (id) => {
  const options = getToken('DELETE', `${URL_API}/api/notas/${id}`)
  return axios.request(options)
}
