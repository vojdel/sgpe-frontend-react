import * as yup from 'yup'

export const NotasGrupoSchema = {
  empleado_id: yup.number()
    .min(1, 'El Profesor o Maestro es requerido')
    .required('El Profesor o Maestro es requerido'),
  materia: yup.number()
    .min(1, 'La Materia es requerido')
    .required('La Materia es requerido'),
  periodo_escolar: yup.number()
    .min(1, 'El Periodo Escolar es requerido')
    .required('El Periodo Escolar es requerido'),
  grado: yup.number()
    .min(1, 'El Grado es requerido')
    .required('El Grado es requerido'),
  seccion: yup.number()
    .min(1, 'La Sección es requerido')
    .required('La Sección es requerido')
}
