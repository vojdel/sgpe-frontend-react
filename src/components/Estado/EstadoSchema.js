import * as yup from 'yup'

export const EstadoSchema = yup.object().shape({
  id: yup.number()
    .required(),
  // .default(0),
  estado: yup.string()
    .min(5, 'El nombre del estado es muy corto')
    .max(20, 'El nombre del estado es muy largo')
    .required('Es requerido el nombre del estado')
    .default('')
})
