import * as yup from 'yup'

export const GradoSchema = yup.object().shape({
  grado: yup.string()
    .min(5, 'El nombre del grado es muy corto')
    .max(20, 'El nombre del grado es muy largo')
    .required('Es requerido el nombre del grado')
})
