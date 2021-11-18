/**
 * getAll.
 * @description Hace una peticion para obtener todos los tipos de alergias
 * @returns Todo los estados
 */
export const getAll = () => {
  return fetch('../../../examples/tipoAlergia.json')
    .then(response => {
      const { data } = response.json()
      return data
    })
}
