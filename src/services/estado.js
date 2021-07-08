/**
 * getAll.
 * @description Hace una peticion para obtener todos los estados
 * @returns Todo los estados
 */
export const getAll = () => {
  return fetch('../../../examples/estado.json')
    .then(response => {
      const { data } = response.json()
      return data
    })
}
