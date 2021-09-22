import * as yup from 'yup'

export const GradoSchema = {
  grados: yup.string()
    .min(1, 'El nombre del grado es muy corto')
    .max(2, 'El nombre del grado es muy largo')
    .required('Es requerido el nombre del grado')
}
