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
 * @param {Array<string>} names
 * @param {object} values
 * @returns {boolean}
 */
export const esValido = (names, values) => {
  console.log(values)
  let result = false
  names.forEach(name => {
    if (!values[name].includes('') && typeof values[name] !== 'boolean') {
      result = true
      console.log(values[name])
    }
  })
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
  form.forEach(f => {
    if (formulario[f].classList.contains('is-valid') || formulario[f].classList.contains('is-invalid')) {
      formulario[f].classList.remove('is-invalid', 'is-valid')
    }
  })
}
