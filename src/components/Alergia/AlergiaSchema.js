import * as Yup from 'yup'

export const AlergiaSchema = Yup.object().shape({
  alergia: Yup.string()
    .min(5, 'muy corto')
    .max(20, 'demaciado largo')
    .required('es requerido'),
  descripcion: Yup.string()
    .min(5, 'muy corto')
    .max(20, 'demaciado largo')
    .required('es requerido'),
  tipo_alergias: Yup.number()
    .required('Elija un Tipo de Alergia')
    .positive('Elija un Tipo de Alergia')
})
