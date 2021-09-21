/**
 * changeTitle.
 *
 * @param {string} ruta
 * @return {string} result
 */
export const changeTitle = (ruta) => {
  let result = 'Home'

  switch (ruta) {
    case '/estado':
      result = 'Estado'
      break
    case '/municipio':
      result = 'Municipio'
      break
    case '/alergia':
      result = 'Alergia'
      break
    case '/estudiante':
      result = 'Estudiante'
      break
    case '/representante':
      result = 'Representante'
      break
    case '/personal':
      result = 'Personal'
      break
    case '/cargo':
      result = 'Cargo'
      break
    case '/grado':
      result = 'Grado'
      break
    case '/seccion':
      result = 'Sección'
      break
    case '/materia':
      result = 'Materia'
      break
    case '/usuario':
      result = 'Usuario'
      break
  }
  return result
}
