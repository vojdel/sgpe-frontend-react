import * as yup from 'yup'
import moment from 'moment'

export const AsistenciaSchema = {
  fecha: yup.date()
    .min(moment().format('YYYY-MM-DD'), `debe seleccionar una fecha mayor a ${moment().format('YYYY-MM-DD')}`)
    .required('la fecha es requerida'),
  asistio: yup.bool()
    .required()
    .default(false),
  empleado_id: yup.number()
    .min(1, 'Debes elejir la cedula de un empleado')
    .required('debe elejir la cedula de un empleado')
}

export const motivo = yup.string()
  .min(10, 'Debe poner el motivo de minimo 10 letras')
  .required('El motivo es requerido')
