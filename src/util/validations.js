/**
 * validaciones.
 *
 * @param {object} schema Eschema del paquete Yup de las validaciones
 * @param {string} name name del input, select o textarea
 * @param {string|number} value valor del input, select o textarea
 * @param {object} errors objeto de los errores
 * @param {Function} setErrors hook para modificar los errores
 * @param {any} classList lista de classes en el input, select o textarea
 * @returns {void}
 */
export const validaciones = (schema, name, value, errors, setErrors, classList) => {
  schema.validate({
    [name]: value
  })
    .then(() => {
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
    }).catch(err => {
      setErrors({
        ...errors,
        [name]: (err.path === name) ? err.message : ''
      })

      if (err.path === name) {
        classList.remove('is-valid')
        classList.add('is-invalid')
      } else if (err.path !== name) {
        classList.remove('is-invalid')
        classList.add('is-valid')
      } else {
        classList.add('is-invalid')
      }
    })
}

/**
 * esValido.
 *
 * @param {object} schema
 * @param {object} values
 * @param {object} errors
 * @param {Function} setErrors
 * @returns {Promise}
 */
export const esValido = async (schema, values, errors, setErrors) => {
  return setErrors({
    ...errors,
    esValido: await schema.isValid(values)
  })
}

export const cleanForm = (setData, initialData, setErrors, initialError, form) => {
  setData(initialData)
  setErrors(initialError)
  const formulario = document.querySelector('form').elements
  // formulario.estado_id.classList.remove('is-invalid', 'is-valid')
  // formulario.municipio.classList.remove('is-invalid', 'is-valid')
  form.forEach(f => {
    formulario[f].classList.remove('is-invalid', 'is-valid')
  })
}
