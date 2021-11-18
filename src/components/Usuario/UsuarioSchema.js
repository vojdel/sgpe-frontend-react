import * as yup from 'yup'

export const UsuarioSchema = {
  email: yup.string()
    .email('Debe poner un correo valido')
    .required('El correo es requerido'),
  pregunta: yup.string()
    .min(10, 'Debe poner una pregunta de minimo 10 letras')
    .required('La pregunta es requerida'),
  respuesta: yup.string()
    .min(3, 'debe poner una respuesta de 3 letras minimo')
    .required('La respuesta es requerida'),
  tipo: yup.number()
    .min(1, 'Debe elejir un tipo de usuario')
    .required('debe elejir un tipo de usuario'),
  empleado_id: yup.number()
    .min(1, 'Debes elejir la cedula de un empleado')
    .required('debe elejir la cedula de un empleado'),
  passw: yup.string()
    .min(8, 'debes colocar una contraseña minimo de 8 letras o numeros')
    .required('Debes colocar una contraseña'),
  passw_confirm: yup.string()
    .min(8, 'debes colocar la contraseña de confirmación minimo de 8 letras o numeros')
    .required('Debes coloar otra vez la contraseña para confirmarla')
}

export const UsuarioNextSchema = {
  empleado_id: yup.number()
    .min(1, 'Debes elejir la cedula de un empleado')
    .required('debe elejir la cedula de un empleado')
}

export const UsuarioWithoutPasswordSchema = {
  email: yup.string()
    .email('Debe poner un correo valido')
    .required('El correo es requerido'),
  pregunta: yup.string()
    .min(10, 'Debe poner una pregunta de minimo 10 letras')
    .required('La pregunta es requerida'),
  respuesta: yup.string()
    .min(3, 'debe poner una respuesta de 3 letras minimo')
    .required('La respuesta es requerida'),
  tipo: yup.number()
    .min(1, 'Debe elejir un tipo de usuario')
    .required('debe elejir un tipo de usuario'),
  empleado_id: yup.number()
    .min(1, 'Debes elejir la cedula de un empleado')
    .required('debe elejir la cedula de un empleado')
}
