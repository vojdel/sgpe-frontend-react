import { useState } from 'react'

export const useNotasEstudiante = ({ type, name, lapso }) => {
  const init = {
    id: 0, estudiante_id: 0, valor: 0, lapso: lapso
  }

  const [field, setField] = useState(init)

  const onChange = ({ target }) => {
    setField({
      ...field,
      valor: target.value
    })
  }

  const reset = () => {
    setField(init)
  }

  /**
   * setInit.
   *
   * @param {object} init
   */
  const setInit = (init) => {
    setField(init)
  }

  const data = () => {
    return {
      id: field.id, estudiante_id: field.estudiante_id, valor: field.valor, lapso: lapso
    }
  }

  return {
    type,
    data,
    value: field.valor,
    name,
    onChange,
    reset,
    setInit
  }
}
