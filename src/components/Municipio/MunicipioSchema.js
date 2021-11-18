import * as yup from 'yup'

export const MunicipioSchema = {
  state_id: yup.number()
    .min(1, 'El Estado es requerido')
    .required('El Estado es requerido'),
  municipalitys: yup.string()
    .min(5, 'El nombre del Municipio es muy corto')
    .max(20, 'El nombre del Municipio es muy largo')
    .required('El Municipio es requerido')
}
