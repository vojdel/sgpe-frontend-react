import { useState, useEffect } from 'react'
import { NotasGrupoSchema } from './NotasGrupoSchema'
import { validaciones, cleanForm } from '../../util/validations.js'
import PropTypes from 'prop-types'
import { getAll, getGrupo, createNotaGrupo, updateNotasGrupo } from '../../services/notas.js'
import { getAllGrados, getAllSecciones, getAllEmpleados, getAllMateria, getAllPeriodoEscolares } from '../../services/cbbx.js'
import { object } from 'yup'

/**
 * Form.
 * @returns Modal de Estado
 */
const FormNotasGrupo = ({ id, setRegistro, changeId }) => {
  const initlaNotasGrupo = {
    empleado_id: 0,
    periodo_escolar: 0,
    materia: 0,
    grado: 0,
    seccion: 0
  }

  const initialError = {
    empleado_id: '',
    periodo_escolar: '',
    materia: '',
    grado: '',
    seccion: ''
  }

  const nameOfForm = [
    'empleado_id',
    'periodo_escolar',
    'materia',
    'grado',
    'seccion'
  ]

  const [notas, setNotas] = useState(initlaNotasGrupo)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)
  const [empleados, setEmpleados] = useState([])
  const [periodoEscolar, setPeriodoEscolar] = useState([])
  const [materias, setMaterias] = useState([])
  const [grados, setGrados] = useState([])
  const [secciones, setSecciones] = useState([])

  useEffect(() => {
    if (id !== 0) {
      getGrupo(id).then(data => {
        setNotas(data)
      }).catch(err => {
        console.log(err)
        setNotas(initlaNotasGrupo)
      })
    }
  }, [id])

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleChange = ({ target }) => {
    const { name, value, classList } = target
    setNotas({
      ...notas,
      [name]: value
    })
    validaciones(NotasGrupoSchema[name], name, value, errors, setErrors, classList)
    console.log(errors)
  }

  const clean = () => {
    cleanForm(setNotas, initlaNotasGrupo, setErrors, initialError, nameOfForm)
    changeId(0)
    setNotas(initlaNotasGrupo)
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (id === 0) {
      createNotaGrupo(notas).then(data => {
        clean()
        console.log(data)
        getAll().then(({ data }) => {
          setRegistro(data)
        }).finally(() => {
          setValido(false)
        })
      })
    } else {
      updateNotasGrupo(id, notas).then(data => {
        clean()
        console.log(data)
        getAll().then(({ data }) => {
          setRegistro(data)
        })
      }).finally(() => {
        setValido(false)
      })
    }
  }

  const handleErrors = async () => {
    const validacion = await object().shape(NotasGrupoSchema).isValid(notas)
    setValido(validacion)
  }

  useEffect(() => {
    handleErrors()
  }, [errors])

  useEffect(() => {
    getAllEmpleados().then(response => setEmpleados(response.data))
    getAllGrados().then(response => setGrados(response.data)).catch(() => setGrados([{ id: 0, grados: '' }]))
    getAllPeriodoEscolares().then(response => setPeriodoEscolar(response.data)).catch(() => {
      setPeriodoEscolar([{
        id: 0,
        anio_ini: '',
        anio_fin: ''
      }])
    })
    getAllMateria().then(response => setMaterias(response.data)).catch(() => {
      setMaterias([{
        id: 0,
        nombre: ''
      }])
    })
  }, [])

  useEffect(() => {
    if (notas.grado !== 0) {
      getAllSecciones(notas.grado).then(response => setSecciones(response.data))
    }
  }, [notas.grado])

  return (

    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Municipio</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="empleado_id">Profesor:</label>
                    <select className="form-control" id="empleado_id" name="empleado_id" onChange={handleChange} value={notas.empleado_id}>
                      <option value="0">Seleccione un Profesor...</option>
                      {
                        empleados.map((empleado, index) => {
                          return (<option value={empleado.id} key={index}>{`${empleado.nombre} ${empleado.apellido}`}</option>)
                        })
                      }
                    </select>
                    {errors.empleado_id ? <div className="invalid-feedback">{errors.empleado_id}</div> : null}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="materia">Materia:</label>
                    <select className="form-control" id="materia" name="materia" onChange={handleChange} value={notas.materia}>
                      <option value="0">Seleccione una Materia...</option>
                      {
                        materias.map((materia, index) => {
                          return (<option value={materia.id} key={index}>{materia.nombre}</option>)
                        })
                      }
                    </select>
                    {errors.materia ? <div className="invalid-feedback">{errors.materia}</div> : null}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="periodo_escolar">Periodo Escolar:</label>
                    <select className="form-control" id="periodo_escolar" name="periodo_escolar" onChange={handleChange} value={notas.periodo_escolar}>
                      <option value="0">Seleccione un Periodo Escolar...</option>
                      {
                        periodoEscolar.map((periodo, index) => {
                          return (<option value={periodo.id} key={index}>{periodo.anio_ini}-{periodo.anio_fin}</option>)
                        })
                      }
                    </select>
                    {errors.periodo_escolar ? <div className="invalid-feedback">{errors.periodo_escolar}</div> : null}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="grado">Grado:</label>
                    <select className="form-control" id="grado" name="grado" onChange={handleChange} value={notas.grado}>
                      <option value="0">Seleccione un Grado...</option>
                      {
                        grados.map((grado, index) => {
                          return (<option value={grado.id} key={index}>{grado.grados}</option>)
                        })
                      }
                    </select>
                    {errors.grado ? <div className="invalid-feedback">{errors.grado}</div> : null}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="seccion">Sección:</label>
                    <select className="form-control" id="seccion" name="seccion" onChange={handleChange} value={notas.seccion}>
                      <option value="0">Seleccione una Sección...</option>
                      {
                        secciones.map((seccion, index) => {
                          return (<option value={seccion.id} key={index}>{seccion.secciones}</option>)
                        })
                      }
                    </select>
                    {errors.seccion ? <div className="invalid-feedback">{errors.seccion}</div> : null}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            {(valido)
              ? <button type="submit" className="btn bg-gradient-info" onClick={handleSubmit}>
                {(id === 0) ? 'Registrar' : 'Editar'
                }</button>
              : <button type="button" className="btn bg-gradient-info" disabled>
                {(id === 0) ? 'Registrar' : 'Editar'
                }</button>
            }
          </div>
        </div>
      </div>
    </div>

  )
}

FormNotasGrupo.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default FormNotasGrupo
