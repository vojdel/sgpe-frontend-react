import * as yup from 'yup'

export const SeccionSchema = yup.object().shape({
  seccion: yup.string()
    .min(1, 'El nombre de la seccion es muy corto')
    .max(2, 'El nombre de la seccion es muy largo')
    .required('Es requerido el nombre de la seccion')
})
