import * as yup from 'yup'

export const EstadoSchema = {
  states: yup.string()
    .min(3, 'El nombre del estado es muy corto')
    .max(30, 'El nombre del estado es muy largo')
    .required('Es requerido el nombre del estado')
}
