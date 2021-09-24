import * as yup from 'yup'

export const RepresentanteSchema = {
  cedula: yup.number()
    .min(1000000, 'Tamaño minimo de cedula invalido')
    .max(100000000, 'Tamaño maximo de cedula invalido')
    .required('La cedula es requerida'),
  nombre: yup.string()
    .min(4, 'Tamaño minimo de nombre invalido')
    .max(30, 'tamaño maximo de nombre invalido')
    .required('El nombre es requerido'),
  apellido: yup.string()
    .min(5, 'Tamaño minimo de apellido invalido')
    .max(30, 'Tamaño maximo de apellido invalido')
    .required('El apellido es requerido'),
  sex: yup.string()
    .required('El sexo es requerido'),
  telefono: yup.string()
    .min(11, 'Tamaño mininmo de Telefono invalido')
    .max(13, 'Tamaño maximo de telefono invalido')
    .required('El telefono es requerido'),
  direccion: yup.string()
    .min(10, 'tamaño minimo de la direccion invalido')
    .max(50, 'Tamaño maximo de la direccion invalido')
    .required('La direccion es requerido'),
  states: yup.number()
    .min(1, 'Seleccione un estado')
    .required('Seleccione un estado'),
  municipality: yup.number()
    .min(1, 'Seleccione un municipio')
    .required('Seleccione un municipio'),
  ocupacion_laboral: yup.number()
    .min(1, 'Seleccione una ocupacion laboral')
    .required('Seleccione una ocupacion laboral')
}
