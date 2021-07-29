import * as yup from 'yup'

export const EstudianteSchema = {
  cedula: yup.number()
    .min(6, 'Tamaño de cedula invalido')
    .max(8, 'Tamaño de cedula invalido')
    .required('Es obligatoria la cedula'),
  nombre: yup.string()
    .min(5, 'Tamaño del nombre invalido')
    .max(30, 'Tamaño del nombre o los nombre invalido')
    .required('Es requerido minimo un nombre'),
  apellido: yup.string()
    .min(5, 'Tamaño del apellido invalido')
    .max(30, 'Tamaño del apellido o apellidos invalido')
    .required('Es requerido minimo un apellido'),
  sex: yup.string()
    .required()
    .default('Masculino'),
  telefono: yup.string()
    .min(12, 'Tamaño del telefono insuficiente')
    .max(15, 'tamaño del telefono superado')
    .required('El Telefono es requerido'),
  direccion: yup.string()
    .min(10, 'Tamaño de la direccion invalida')
    .max(50, 'Tamaño de la direccion es demaciado larga')
    .required(),
  municipality: yup.number()
    .min(1, 'Debe seleccionar un municipio')
    .required('Debe seleccionar un municipio'),
  fecha_nacimiento: yup.date()
    .min('2000-01-01', 'Debe elejir una fecha despues del 2000')
    .max(new Date(), `Debe elejir una fecha antes de ${new Date()}`)
    .required('Debe elejir una fecha'),
  lugar_nacimiento: yup.string()
    .min(10, 'Tamaño del lugar de nacimiento invalido')
    .max(50, 'Tamaño del lugar de nacimiento invalido')
    .required('El Lugar de Nacimiento es requerido'),
  descripcion: yup.string()
    .min(10, 'tamaño de la descriccion invalido')
    .max(50, 'Tamaño de la descripcion invalido'),
  estatura: yup.number()
    .min(80, 'Coloque una estatura mayor a 80 metros')
    .max(210, 'Coloque una estatura menor a 210 metros')
    .required('La estatura es requerida'),
  peso: yup.number()
    .min(20, 'Coloque un peso mayor a 20 kilos')
    .max(120, 'Coloque un peso menor a 120 kilos')
    .required('El peso es requerido'),
  talla: yup.string()
    .required('La talla es reuerida'),
  t_sangre: yup.string()
    .required('El tipo de sangre es requerid')
}
