import * as yup from 'yup'

export const InscripcionSchema = {
  estudiante_id: yup.number()
    .min(1, 'Debe elejir a un estudiante')
    .required('El Estudiante es obligatorio'),
  representante_id: yup.number()
    .min(1, 'Debe elejir a un representante')
    .required('El Representante es obligatorio'),
  parentesco: yup.number()
    .min(1, 'Debe elejir un parentesco')
    .required('El Parentesco es obligatorio'),
  empleado_id: yup.number()
    .min(1, 'Debe elejir a un empleado')
    .required('El Estudiante es obligatorio'),
  periodoEscolar: yup.number()
    .min(1, 'Debe elejir un periodo escolar')
    .required('El Periodo Escolar es obligatorio'),
  grado: yup.number()
    .min(1, 'Debe elejir un grado')
    .required('El Grado es obligatorio'),
  seccion: yup.number()
    .min(1, 'Debe elejir una seccion')
    .required('La seccion es obligatorio')
}

export const InscripcionNextSchema = yup.number()
  .min(1, 'Debe elejir a un estudiante')
  .required('El Estudiante es obligatorio')

export const InscripcionNextTwoSchema = {
  representante_id: yup.number()
    .min(1, 'Debe elejir a un representante')
    .required('El Representante es obligatorio'),
  parentesco: yup.number()
    .min(1, 'Debe elejir un parentesco')
    .required('El Parentesco es obligatorio')
}
