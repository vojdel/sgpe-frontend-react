import * as Yup from 'yup'

export const AlergiaScheme = Yup.object().shape({
  alergias: Yup.string()
    .min(5, 'muy corto')
    .max(20, 'demaciado largo')
    .required('es requerido'),
  descripcion: Yup.string()
    .min(5, 'muy corto')
    .max(20, 'demaciado largo')
    .required('es requerido'),
  tipo_alergia: Yup.number()
    .required('Es requerido')
    .positive('Solo numeros positivos')
})
