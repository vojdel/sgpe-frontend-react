import * as yup from 'yup'

const fecha = new Date()
const anio = fecha.getFullYear()

export const PeriodoEscolarSchema = {
  anio_ini: yup.number()
    .min(2000, 'El Año de Inicio debe ser mayor a 2000')
    .max(anio, 'El Año de Inicio debe ser menor a ' + anio)
    .required('El Año de Inicio es requerido'),
  anio_fin: yup.number()
    .min(2000, 'El nombre del Fin del Año del periodo escolar debe ser mayor a 2000')
    .max(anio, 'El nombre del Fin del Año del periodo escolar debe ser menor a ' + anio)
    .required('El Fin del Año del periodo escolar es requerido')
}
