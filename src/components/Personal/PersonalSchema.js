import * as yup from 'yup'

export const PersonalSchema = {
  cedula: yup.string()
    .min(7, 'Tamaño minimo de cedula invalido')
    .max(11, 'Tamaño maximo de cedula invalido')
    .required('La cedula es requerida'),
  nombre: yup.string()
    .min(5, 'Tamaño minimo del nombre invalido')
    .max(30, 'Tamaño maximo de los nombres invalidos')
    .default(''),
  apellido: yup.string()
    .min(5, 'Tamaño minimo del apellido invalido')
    .max(30, 'Tamaño maximo de los apellidos invalidos')
    .default(''),
  sex: yup.string(),
  telefono: yup.string()
    .min(10, 'Tamaño minimo del telefono invalido')
    .max(13, 'Tamaño maximo del telefono invalido')
    .default(''),
  direccion: yup.string()
    .min(10, 'Tamaño minimo de la direccion invalido')
    .max(50, 'Tamaño maximo de la direccion invalido'),
  states: yup.number()
    .min(1, 'Seleccione un estado')
    .required('Seleccione un estado'),
  municipality: yup.number()
    .min(1, 'Seleccione un municipio')
    .default(0),
  anio_ing_inst: yup.date()
    .min('1950-01-01', 'Elija una fecha mayor a 01/01/1950')
    .max(new Date(), `Elija una fecha menor a ${new Date()}`)
    .default(new Date()),
  anio_ing_mppe: yup.date()
    .min('1950-01-01', 'Elija una fecha mayor a 01/01/1950')
    .max(new Date(), `Elija una fecha menor a ${new Date()}`)
    .default(new Date()),
  tit_pregrad: yup.string()
    .min(10, 'Tamaño minimo del Titulo de Pregrado invalido')
    .max(30, 'Tamaño maximo del Titulo de Pregrado invalido')
    .default(''),
  tit_postgrad: yup.string()
    .min(10, 'Tamaño minimo del Titulo de Prosgrado invalido')
    .max(30, 'Tamaño maximo del Titulo de Prosgrado invalido')
    .default(''),
  cargo: yup.number()
    .min(1, 'Seleccione un Cargo')
    .default(0)
}

export const PersonalNextSchema = {
  cedula: yup.string()
    .min(7)
    .max(11)
    .required(),
  nombre: yup.string()
    .min(5)
    .max(30)
    .default(''),
  apellido: yup.string()
    .min(5)
    .max(30)
    .default(''),
  sex: yup.string(),
  telefono: yup.string()
    .min(10)
    .max(13)
    .default(''),
  direccion: yup.string()
    .min(10)
    .max(50),
  states: yup.number()
    .min(1)
    .required(),
  municipality: yup.number()
    .min(1)
    .default(0)
}
