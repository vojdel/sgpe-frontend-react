import * as yup from 'yup'

export const CargoSchema = yup.string()
  .min(5, 'El nombre del cargo es muy corto')
  .max(20, 'El nombre del cargo es muy largo')
  .required('El cargo es requerido')
