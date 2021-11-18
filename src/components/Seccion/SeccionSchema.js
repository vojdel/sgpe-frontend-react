import * as yup from 'yup'

export const SeccionSchema = {
  grado: yup.number()
    .min(1, 'El grado es requerido')
    .required('El grado es requerido'),
  secciones: yup.string()
    .min(1, 'El nombre de la seccion es muy corto')
    .max(2, 'El nombre de la seccion es muy largo')
    .required('Es requerido el nombre de la seccion')
}
