import * as yup from 'yup'

export const OcupacionLaboralSchema = yup.string()
  .min(5, 'El nombre del labor es muy corto')
  .max(20, 'El nombre del labor es muy largo')
  .required('Es requerido el nombre del labor')
