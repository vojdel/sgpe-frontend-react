/**
 * validaciones.
 *
 * @param {object} schema Eschema del paquete Yup de las validaciones
 * @param {string} name name del input, select o textarea
 * @param {object} value valor del input, select o textarea
 * @param {object} errors objeto de los errores
 * @param {Function} setErrors hook para modificar los errores
 * @param {any} classList lista de classes en el input, select o textarea
 * @returns {Promise}
 */
export const validaciones = async (schema, name, value, errors, setErrors, classList) => {
  await schema.validate(value)
    .then((result) => {
      setErrors({
        ...errors,
        [name]: ''
      })
      if (classList.contains('is-invalid')) {
        classList.remove('is-invalid')
        classList.add('is-valid')
      } else {
        classList.add('is-valid')
      }
    })
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.message
      })
      if (classList.contains('is-valid')) {
        classList.remove('is-valid')
        classList.add('is-invalid')
      } else {
        classList.add('is-invalid')
      }
    })
}

/**
 * esValido.
 *
 * @type {Function}
 * @param {Array<string>} names
 * @param {object} values
 * @returns {boolean}
 */
export const esValido = (names, values) => {
  let result = true
  console.log(values)
  names.forEach(name => {
    if (values[name].length !== 0 && typeof values[name] !== 'boolean') {
      console.log(values[name])
      result = false
    }
  })
  console.log(result)
  return result
}

/**
 * cleanForm.
 *
 * @param {Function} setData
 * @param {object} initialData
 * @param {Function} setErrors
 * @param {object} initialError
 * @param {Array<string>} form
 * @returns {void}
 */
export const cleanForm = (setData, initialData, setErrors, initialError, form) => {
  setData(initialData)
  setErrors(initialError)
  const formulario = document.querySelector('form').elements
  form.forEach(name => {
    if (formulario[name].classList.contains('is-valid') || formulario[name].classList.contains('is-invalid')) {
      formulario[name].classList.remove('is-invalid', 'is-valid')
    }
  })
}
