import { useState, useEffect } from 'react'
import { AsistenciaSchema, motivo } from './AsistenciaSchema'
import { getAllDays, getOne, getAll, getEmpleados, create, update, destroy } from '../../services/asistencia'
import { validaciones, cleanForm } from '../../util/validations.js'
import PropTypes from 'prop-types'
import moment from 'moment'
import { object } from 'yup'
import Form from './Form.jsx'
import Tabla from './Tabla.jsx'
import toast from 'react-hot-toast'

const ModalAsistencia = ({ setRegistro, tipo, setTipo, fecha, setFecha, calendarToday }) => {
  const initialAsistencia = {
    fecha: fecha,
    motivo: '',
    asistio: false,
    empleado_id: 0,
    empleado: {
      cedula: 0,
      nombre: '',
      apellido: '',
      cargo: ''
    }
  }

  const initialError = {
    fecha: '',
    motivo: '',
    asistio: '',
    empleado_id: ''
  }

  const nameOfForm = [
    'empleado_id', 'fecha', 'asistio', 'motivo'
  ]

  const initialData = [
    {
      id: 0,
      nombre: '',
      fecha: '',
      asistio: ''
    }
  ]

  const [asistencia, setAsistencia] = useState(initialAsistencia)
  const [datas, setDatas] = useState(initialData)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)
  const [id, setId] = useState(0)
  const [empleados, setEmpleados] = useState([{
    id: 0,
    nombre: '',
    apellido: '',
    cargo: ''
  }])

  const handleEmpleados = (edit) => {
    getEmpleados(edit).then(response => {
      setEmpleados(response.data)
    }).catch(() => {
      setEmpleados([{
        id: 0,
        nombre: 'no existen ',
        apellido: 'Empleados ',
        cargo: ' registrados'
      }])
    })
  }

  useEffect(() => {
    handleEmpleados(0)
  }, [])

  const handleChange = ({ target }) => {
    const { name, value, classList } = target

    if (name === 'asistio') {
      setAsistencia({
        ...asistencia,
        asistio: (value === '0')
      })
    } else {
      setAsistencia({
        ...asistencia,
        [name]: value
      })
    }
    validaciones(
      (name !== 'motivo') ? AsistenciaSchema[name] : motivo,
      name,
      value,
      errors,
      setErrors,
      classList
    )
  }

  const clean = () => {
    if (tipo === 'form') {
      cleanForm(setAsistencia, initialAsistencia, setErrors, initialError, nameOfForm)
      setId(0)
      setTimeout(() => {
        setValido(false)
      }, 1000)
      handleEmpleados(0)
    }
    setTipo('form')
    setFecha(null)
    setId(0)
  }

  /**
  * Manejar input estado
  * @param {any} event
  * */
  const handleSubmit = (event) => {
    event.preventDefault()
    const date = moment()
    if (id === 0) {
      create({
        fecha: asistencia.fecha,
        asistio: asistencia.asistio,
        motivo: asistencia.motivo,
        empleado_id: asistencia.empleado_id
      }).then(response => {
        toast.success('Se creó el registro')
        clean()
        getAll(
          date.startOf('month').format('DD'),
          date.endOf('month').format('DD'),
          date.format('MM'),
          date.format('YY')
        ).then(response => {
          setRegistro(response.data)
        }).finally(() => {
          setValido(false)
          calendarToday()
        })
      })
    } else {
      update(id, {
        fecha: asistencia.fecha,
        asistio: asistencia.asistio,
        motivo: asistencia.motivo,
        empleado_id: asistencia.empleado_id
      }).then(response => {
        toast.success('Se modificó el registro')
        clean()
        getAll(
          date.startOf('month').format('DD'),
          date.endOf('month').format('DD'),
          date.format('MM'),
          date.format('YY')
        ).then(response => {
          setRegistro(response.data)
        })
      }).finally(() => {
        getAllDays(fecha).then(response => {
          if (response.data.length >= 1) {
            setDatas(response.data)
          } else {
            setDatas(initialData)
          }
        })
        setValido(false)
        setId(0)
        setTipo('tabla')
        calendarToday()
      })
    }
  }

  const handleErrors = async () => {
    const validacion = await object().shape(AsistenciaSchema).isValid(asistencia)
    setValido(validacion)
  }

  useEffect(() => {
    handleErrors()
  }, [errors])

  const handleDelete = (event, id) => {
    event.preventDefault()
    destroy(id).then(data => {
      const date = moment()
      getAll(
        date.startOf('month').format('DD'),
        date.endOf('month').format('DD'),
        date.format('MM'),
        date.format('YY')
      ).then(response => {
        getAllDays(fecha).then(response => {
          if (response.data.length >= 1) {
            setDatas(response.data)
          } else {
            setDatas(initialData)
            setTipo('form')
          }
        })
        setRegistro(response.data)
        calendarToday()
        handleEmpleados(0)
      })
    })
  }

  useEffect(() => {
    if (fecha !== null) {
      getAllDays(fecha).then(response => {
        if (response.data.length >= 1) {
          setDatas(response.data)
        } else {
          setDatas(initialData)
          setTipo('form')
        }
      })
      setTipo('tabla')
    }
  }, [fecha])

  useEffect(() => {
    if (id !== 0) {
      getOne(id).then(response => {
        setAsistencia(response.data)
        setValido(true)
        setTipo('form')
      })
      handleEmpleados(1)
    }
  }, [id])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Asistencia</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            {
              (tipo === 'tabla')
                ? <Tabla
                  datas={datas}
                  handleDelete={handleDelete}
                  setId={setId}
                />
                : <Form
                  asistencia={asistencia}
                  errors={errors}
                  empleados={empleados}
                  valido={valido}
                  id={id}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  clean={clean}
                />
            }
          </div>
        </div>
      </div>
    </div >
  )
}

ModalAsistencia.propTypes = {
  setRegistro: PropTypes.func,
  setTipo: PropTypes.func,
  setFecha: PropTypes.func,
  tipo: PropTypes.string,
  fecha: PropTypes.string,
  calendarToday: PropTypes.func
}

export default ModalAsistencia
