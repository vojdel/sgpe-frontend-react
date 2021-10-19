import { handleTabs } from '../../util/handles'
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { validaciones, cleanForm } from '../../util/validations.js'
import { getOne, create, update } from '../../services/service.js'
import { object } from 'yup'
import { getAllEmpleados, getAllGrados, getAllSecciones, getAllPeriodoEscolares, getAllParentescos } from '../../services/cbbx'
import { getEstudiante, getRepresentante } from '../../services/inscripciones'
import { InscripcionSchema, InscripcionNextSchema, InscripcionNextTwoSchema } from './InscripcionSchema'

const FormInscripcion = () => {
  const history = useHistory()

  const initialInscripcion = {
    estudiante_id: 0,
    estudiante_cedula: 0,
    estudiante: {
      cedula: 0,
      nombre: '',
      apellido: '',
      sex: 'Masculino',
      telefono: '',
      direccion: '',
      states: '',
      municipality: '',
      fecha_nacimiento: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      lugar_nacimiento: '',
      descripcion: '',
      estatura: '',
      peso: '',
      talla: '',
      t_sangre: '',
      fecha_inscrip: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      estado_inscrip: false,
      beca: false,
      repite: false
    },
    representante_id: 0,
    representante_cedula: 0,
    representante: {
      cedula: 0,
      nombre: '',
      apellido: '',
      sex: 'Masculino',
      telefono: '',
      direccion: '',
      states: '',
      municipality: '',
      ocupacion_laboral: ''
    },
    empleado_id: 0,
    empleado: {
      cedula: '',
      nombre: '',
      apellido: '',
      cargo: ''
    },
    periodoEscolar: 0,
    seccion: 0,
    grado: 0,
    parentesco: 0
  }

  const initialError = {
    estudiante_id: '',
    representante_id: '',
    empleado_id: '',
    periodoEscolar: '',
    seccion: '',
    grado: '',
    parentesco: ''
  }

  const nameOfForm = [
    'estudiante_cedula',
    'representante_cedula',
    'empleado_id',
    'periodoEscolar',
    'seccion',
    'grado',
    'parentesco'
  ]

  const cardFooter = {
    borderTop: 'none'
  }

  const [inscripcion, setInscripcion] = useState(initialInscripcion)
  const [errors, setErrors] = useState(initialError)
  const [validoNextTwo, setValidoNextTwo] = useState(true)
  const [validoNext, setValidoNext] = useState(true)
  const [valido, setValido] = useState(false)
  const [id, setId] = useState(0)
  const [empleados, setEmpleados] = useState([{
    id: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    cargo: ''
  }])
  const [periodoEscolar, setPeriodoEscolar] = useState([{
    id: 0,
    anio_ini: '',
    anio_fin: ''
  }])
  const [grados, setGrados] = useState([{
    id: 0,
    grados: ''
  }])
  const [secciones, setSecciones] = useState([{
    id: 0,
    secciones: ''
  }])
  const [parentescos, setParentescos] = useState([{
    id: 0,
    parentescos: ''
  }])

  useEffect(() => {
    const inscripcionId = window.localStorage.getItem('inscripcion_id')
    setTimeout(() => {
      if (inscripcionId !== null) {
        setId(parseInt(inscripcionId))
        getOne(inscripcionId, 'inscripcion').then(data => {
          setInscripcion(data)
          setValido(true)
          setValidoNext(true)
          setValidoNextTwo(true)
        })
      }
    }, 1000)
    getAllPeriodoEscolares().then(response => {
      console.log(response.data)
      setPeriodoEscolar(response.data)
    }).catch(() => {
      setPeriodoEscolar([{
        id: 0,
        anio_ini: 'np existen ',
        anio_fin: 'periodos ecolares registrados'
      }])
    })
    getAllGrados().then(response => {
      console.log(response.data)
      setGrados(response.data)
    }).catch(() => {
      setGrados([{
        id: 0,
        grados: 'no existen grados registrados'
      }])
    })
    getAllParentescos().then(response => {
      console.log(response.data)
      setParentescos(response.data)
    }).catch(() => {
      setParentescos([{
        id: 0,
        parentescos: 'no existen parentescos registrados'
      }])
    })
    getAllEmpleados().then(response => {
      console.log(response.data)
      setEmpleados(response.data)
    }).catch(() => {
      setEmpleados([{
        id: 0,
        cedula: 'no ',
        nombre: 'existen ',
        apellido: 'Empleados ',
        cargo: ' registrados'
      }])
    })
  }, [])

  useEffect(() => {
    if (inscripcion.grado !== 0) {
      getAllSecciones(inscripcion.grado).then(response => {
        setSecciones(response.data)
      }).catch(errors => {
        console.log({ errors })
        setSecciones([{
          id: 0,
          secciones: ''
        }])
      })
    } else {
      setSecciones([{
        id: 0,
        secciones: ''
      }])
    }
  }, [inscripcion.grado])

  const handleChange = ({ target }) => {
    const { name, value, classList } = target

    if (name === 'empleado_id') {
      const empleadoSelect = empleados.filter(empleado => {
        return empleado.id === parseInt(value)
      })
      setInscripcion({
        ...inscripcion,
        empleado_id: value,
        empleado: {
          cedula: empleadoSelect[0].cedula,
          nombre: empleadoSelect[0].nombre,
          apellido: empleadoSelect[0].apellido,
          cargo: empleadoSelect[0].cargo
        }
      })
    } else {
      setInscripcion({
        ...inscripcion,
        [name]: value
      })
    }

    validaciones(
      InscripcionSchema[name],
      name,
      value,
      errors,
      setErrors,
      classList
    )

    console.log(`${name}: ${value}`)
  }

  const handleChangeCedula = ({ target }) => {
    const { name, value } = target
    setInscripcion({
      ...inscripcion,
      [name]: value
    })
    console.log(`${name}: ${value}`)
    console.log(inscripcion)
  }

  const salir = (event) => {
    event.preventDefault()
    history.push('/inscripcion')
    window.localStorage.removeItem('inscripcion_id')
  }

  const clean = () => {
    handleTabs('inscripcion', 'estudiante')
    cleanForm(setInscripcion, initialInscripcion, setErrors, initialError, nameOfForm)
    window.localStorage.removeItem('inscripcion_id')
    setId(0)
    setInscripcion(initialInscripcion)
    setErrors(initialError)
    setTimeout(() => {
      setValido(false)
      setValidoNext(false)
      setValidoNextTwo(false)
    }, 1000)
  }

  const handleEstudiante = (event) => {
    event.preventDefault()

    getEstudiante(inscripcion.estudiante_cedula).then(response => {
      console.log(response.data)
      return response.data
    }).then(data => {
      if (data) {
        setInscripcion({
          ...inscripcion,
          estudiante_id: data.id,
          estudiante: data
        })
        setValidoNext(true)
      } else {
        setErrors({
          ...errors,
          estudiante_id: 'No existe ningun estudiante con esa cedula'
        })
      }
    }).catch(error => {
      console.log({ error })
      setErrors({
        ...errors,
        estudiante_id: 'No existe ningun estudiante con esa cedula'
      })
    })
  }

  const handleRepresentante = (event) => {
    event.preventDefault()

    getRepresentante(inscripcion.representante_cedula).then(response => {
      console.log(response.data)
      return response.data
    }).then(data => {
      if (data) {
        setInscripcion({
          ...inscripcion,
          representante_id: data.id,
          representante: data
        })
        setValidoNextTwo(true)
      } else {
        setErrors({
          ...errors,
          representante_id: 'No existe ningun representante con esa cedula'
        })
      }
    }).catch(error => {
      console.log({ error })
      setErrors({
        ...errors,
        representante_id: 'No existe ningun representante con esa cedula'
      })
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (id === 0) {
      create('inscripcion', {
        estudiante_id: inscripcion.estudiante_id,
        empleado_id: inscripcion.empleado_id,
        representante_id: inscripcion.representante_id,
        periodoEscolar: inscripcion.periodoEscolar,
        grado: inscripcion.grado,
        seccion: inscripcion.seccion,
        parentesco: inscripcion.parentesco
      }).then(response => {
        console.log(response)
        clean()
      })
    } else {
      update(id, 'inscripcion', {
        estudiante_id: inscripcion.estudiante_id,
        empleado_id: inscripcion.empleado_id,
        representante_id: inscripcion.representante_id,
        periodoEscolar: inscripcion.periodoEscolar,
        grado: inscripcion.grado,
        seccion: inscripcion.seccion,
        parentesco: inscripcion.parentesco
      }).then(response => {
        console.log(response)
        clean()
      })
    }
  }

  const handleErrors = async () => {
    // Estudiante
    const validacionNext = await InscripcionNextSchema.isValid(inscripcion)
    setValidoNext(validacionNext)
    // Representante
    const validacionNextTwo = await object().shape(InscripcionNextTwoSchema).isValid(inscripcion)
    setValidoNextTwo(validacionNextTwo)
    // Inscripcion
    const validacion = await object().shape(InscripcionSchema).isValid(inscripcion)
    setValido(validacion)
  }

  useEffect(() => {
    handleErrors()
  }, [errors])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-between">
        <div className="card my-5 mt-0">
          <div className="card-header bg-white">
            <div className="col-12 pb-4 text-center">
              <h1 className="card-title font-weight-bolder text-info text-gradient">Inscripción</h1>
            </div>
            <div className="col-12">
              <nav style={{ marginBottom: '-1.59em' }}>
                <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                  <a className="nav-link active text-center w-25" id="nav-estudiante-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-estudiante" aria-selected="true">Estudiante</a>
                  <a className="nav-link text-center w-25" id="nav-representante-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-representante" aria-selected="false">Representante</a>
                  <a className="nav-link text-center w-25" id="nav-inscripcion-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-inscripcion" aria-selected="false">Inscripción</a>
                </div>
              </nav>
            </div>
          </div>
          <div className="card-body tab-content" id="nav-tabContent">
            <form role="form text-left">

              {/* Estudiante */}

              <div className="tab-pane show active" id="nav-estudiante" role="tabpanel" aria-labelledby="nav-estudiante-tab" style={{ minHeight: '550px' }}>
                <div className="row">
                  <h2 className="text-center">Estudiante</h2>
                </div>
                <div className="row justify-content-center">
                  <div className="col-5 d-inline-block">
                    <div className="input-group my-4">
                      <label htmlFor="estudianteCedula" className="input-group-text">Cedula: </label>
                      <input type="text" id="estudianteCedula" className="form-control mb-2" placeholder="Escriba la cedula del Estudiante" aria-label="Recipient's username" aria-describedby="button-addon2" name="estudiante_cedula" onChange={handleChangeCedula} value={inscripcion.estudiante_cedula} />
                      <button className="btn btn-outline-secondary mb-2" type="button" id="button-addon2" onClick={handleEstudiante}>Buscar</button>
                    </div>
                    {errors.estudiante_id ? <div className="invalid-feedback">{errors.estudiante_id}</div> : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="estudiante-nombre" className="form-label">Nombre: </label>
                    <input type="text" name="estudiante.nombre" id="estudiante-nombre" className="form-control-plaintext" value={inscripcion.estudiante.nombre} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="estudiante-apellido" className="form-label">Apellido: </label>
                    <input type="text" name="estudiante.apellido" id="estudiante-apellido" className="form-control-plaintext" value={inscripcion.estudiante.apellido} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="estudiante-sex" className="form-label">Sexo: </label>
                    <input type="text" name="estudiante.sex" id="estudiante-sex" className="form-control-plaintext" value={inscripcion.estudiante.sex} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="estudiante-states" className="form-label">Estado: </label>
                    <input type="text" name="estudiante.states" id="estudiante-states" className="form-control-plaintext" value={inscripcion.estudiante.states} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="estudiante-municipality" className="form-label">Municipio: </label>
                    <input type="text" name="estudiante.municipality" id="estudiante-municipality" className="form-control-plaintext" value={inscripcion.estudiante.municipality} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="estudiante-direccion" className="form-label">Dirección: </label>
                    <input type="text" name="estudiante.direccion" id="estudiante-direccion" className="form-control-plaintext" value={inscripcion.estudiante.direccion} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="estudiante-telefono" className="form-label">Telefono: </label>
                    <input type="text" name="estudiante.telefono" id="estudiante-telefono" className="form-control-plaintext" value={inscripcion.estudiante.telefono} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="estudiante-fecha_nacimiento" className="form-label">Fecha de Nacimiento: </label>
                    <input type="date" name="estudiante.fecha_nacimiento" id="estudiante-fecha_nacimiento" className="form-control-plaintext" value={inscripcion.estudiante.fecha_nacimiento} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="estudiante-lugar_nacimiento" className="form-label">Lugar de Nacimiento: </label>
                    <input type="text" name="estudiante.lugar_nacimiento" id="estudiante-lugar_nacimiento" className="form-control-plaintext" value={inscripcion.estudiante.lugar_nacimiento} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="estudiante-estatura" className="form-label">Estatura: </label>
                    <input type="text" name="estudiante.estatura" id="estudiante-estatura" className="form-control-plaintext" value={inscripcion.estudiante.estatura} readOnly />
                  </div>
                  <div className="col-3">
                    <label htmlFor="estudiante-peso" className="form-label">Peso: </label>
                    <input type="date" name="estudiante.peso" id="estudiante-peso" className="form-control-plaintext" value={inscripcion.estudiante.peso} readOnly />
                  </div>
                  <div className="col-3">
                    <label htmlFor="estudiante-talla" className="form-label">Talla: </label>
                    <input type="text" name="estudiante.talla" id="estudiante-talla" className="form-control-plaintext" value={inscripcion.estudiante.talla} readOnly />
                  </div>
                  <div className="col-3">
                    <label htmlFor="estudiante-t_sangre" className="form-label">Tipo de Sangre: </label>
                    <input type="text" name="estudiante.t_sangre" id="estudiante-t_sangre" className="form-control-plaintext" value={inscripcion.estudiante.t_sangre} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <label htmlFor="estudiante-descripcion" className="form-label">Descripción: </label>
                    <div className="input-group mb-3">
                      <textarea className="form-control" id="estudiante-descripcion" placeholder="Escribe la Descripción aqui..." aria-label="Descripcion" aria-describedby="descripcion-addon" name="estudiante.descripcion" value={inscripcion.estudiante.descripcion} readOnly ></textarea>
                    </div>
                  </div>
                  <div className="col-2">
                    <label htmlFor="estudiante-beca" className="form-label">Beca: </label>
                    <input type="checkbox" name="estudiante.beca" id="estudiante-beca" className="form-control-plaintext" checked={inscripcion.estudiante.beca} readOnly />
                  </div>
                  <div className="col-2">
                    <label htmlFor="estudiante-repite" className="form-label">Repite: </label>
                    <input type="checkbox" name="estudiante.repite" id="estudiante-repite" className="form-control-plaintext" checked={inscripcion.estudiante.repite} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="card-footer text-end pb-0" style={cardFooter}>
                    <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={salir}>Close</button>
                    {
                      (validoNext)
                        ? <button type="button" className="btn bg-gradient-info" onClick={() => handleTabs('representante', 'estudiante')} > Continuar</button>
                        : <button type="button" className="btn bg-gradient-info" disabled > Continuar</button>
                    }
                  </div>
                </div>
              </div>

              {/* Representante */}

              <div className="tab-pane fade d-none" id="nav-representante" role="tabpanel" aria-labelledby="nav-representante-tab" style={{ minHeight: '550px' }}>
                <div className="row">
                  <h2 className="text-center">Representante</h2>
                </div>
                <div className="row justify-content-center">
                  <div className="col-5 d-inline-block">
                    <div className="input-group my-4">
                      <label htmlFor="representante-cedula" className="input-group-text">Cedula: </label>
                      <input type="text" id="representante-cedula" className="form-control mb-2" placeholder="Escriba la cedula del Representante" aria-label="Recipient's username" aria-describedby="button-addon2" name="representante_cedula" onChange={handleChangeCedula} value={inscripcion.representante_cedula} />
                      <button className="btn btn-outline-secondary mb-2" type="button" id="button-addon2" onClick={handleRepresentante}>Buscar</button>
                    </div>
                    {errors.representante_id ? <div className="invalid-feedback">{errors.representante_id}</div> : null}
                  </div>
                  <div className="col-4">
                    <label className="form-label" htmlFor="seccion">Parentesco</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="emplaedo" id="parentesco" aria-describedby="empleado-addon" name="parentesco" onChange={handleChange} value={inscripcion.parentesco} disabled={(inscripcion.representante_id === 0)}>
                        <option value="0">Seleccione El parentesco con el estudiante...</option>
                        {
                          parentescos.map((parentesco, index) => {
                            return (<option value={parentesco.id} key={index}>
                              {parentesco.parentescos}
                            </option>)
                          })
                        }
                      </select>
                      {errors.parentesco ? <div className="invalid-feedback">{errors.parentesco}</div> : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="representante-nombre" className="form-label">Nombre: </label>
                    <input type="text" name="representante.nombre" id="representante-nombre" className="form-control-plaintext" value={inscripcion.representante.nombre} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="representante-apellido" className="form-label">Apellido: </label>
                    <input type="text" name="representante.apellido" id="representante-apellido" className="form-control-plaintext" value={inscripcion.representante.apellido} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="representante-sex" className="form-label">Sexo: </label>
                    <input type="text" name="representante.sex" id="representante-sex" className="form-control-plaintext" value={inscripcion.representante.sex} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="representante-states" className="form-label">Estado: </label>
                    <input type="text" name="representante.states" id="representante-states" className="form-control-plaintext" value={inscripcion.representante.states} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="representante-municipality" className="form-label">Municipio: </label>
                    <input type="text" name="representante.municipality" id="representante-municipality" className="form-control-plaintext" value={inscripcion.representante.municipality} readOnly />
                  </div>
                  <div className="col-4">
                    <label htmlFor="representante-direccion" className="form-label">Dirección: </label>
                    <input type="text" name="representante.direccion" id="representante-direccion" className="form-control-plaintext" value={inscripcion.representante.direccion} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="representante-telefono" className="form-label">Telefono: </label>
                    <input type="text" name="representante.telefono" id="representante-telefono" className="form-control-plaintext" value={inscripcion.representante.telefono} readOnly />
                  </div>
                  <div className="col-6">
                    <label htmlFor="representante-ocupacion_laboral" className="form-label">Ocupación Laboral: </label>
                    <input type="text" name="representante.ocupacion_laboral" id="representante-ocupacion_laboral" className="form-control-plaintext" value={inscripcion.representante.ocupacion_laboral} readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="card-footer text-end pb-0" style={cardFooter}>
                    <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={salir}>Close</button>
                    <button type="button" className="btn bg-gradient-info" onClick={() => handleTabs('estudiante', 'representante')} > Atras</button>
                    {
                      (validoNextTwo)
                        ? <button type="button" className="btn bg-gradient-info" onClick={() => handleTabs('inscripcion', 'representante')} > Continuar</button>
                        : <button type="button" className="btn bg-gradient-info" disabled > Continuar</button>
                    }
                  </div>

                </div>
              </div>

              { /* Inscripción */}

              <div className="tab-pane fade d-none" id="nav-inscripcion" role="tabpanel" aria-labelledby="nav-inscripcion-tab" style={{ minHeight: '550px' }} >
                <div className="row">
                  <h2 className="text-center">Inscripción</h2>
                </div>
                <div className="row justify-content-center">
                  <div className="col-5">
                    <label className="form-label" htmlFor="empleado_id">Cedula</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="emplaedo" id="empleado_id" aria-describedby="empleado-addon" name="empleado_id" onChange={handleChange} value={inscripcion.empleado_id}>
                        <option value="0">Seleccione un Empleado...</option>
                        {
                          empleados.map((empleado, index) => {
                            return (<option value={empleado.id} key={index}>
                              {`${empleado.cedula}, ${empleado.nombre} ${empleado.apellido}, ${empleado.cargo}`}
                            </option>)
                          })
                        }
                      </select>
                    </div>
                    {errors.respuesta ? <div className="invalid-feedback">{errors.respuesta}</div> : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="empleado-nombre" className="form-label">Nombre: </label>
                    <input type="text" name="empleado.nombre" id="empleado-nombre" className="form-control" value={inscripcion.empleado.nombre} />
                  </div>
                  <div className="col-4">
                    <label htmlFor="empleado-apellido" className="form-label">Apellido: </label>
                    <input type="text" name="empleado.apellido" id="empleado-apellido" className="form-control" value={inscripcion.empleado.apellido} />
                  </div>
                  <div className="col-4">
                    <label htmlFor="empleado-cargo" className="form-label">Cargo: </label>
                    <input type="text" name="empleado.cargo" id="empleado-cargo" className="form-control" value={inscripcion.empleado.cargo} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label className="form-label" htmlFor="periodoEscolar">Periodo Escolar</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="emplaedo" id="periodoEscolar" aria-describedby="empleado-addon" name="periodoEscolar" onChange={handleChange} value={inscripcion.periodoEscolar}>
                        <option value="0">Seleccione un Periodo Escolar...</option>
                        {
                          periodoEscolar.map((periodo, index) => {
                            return (<option value={periodo.id} key={index}>
                              {`${periodo.anio_ini}-${periodo.anio_fin}`}
                            </option>)
                          })
                        }
                      </select>
                    </div>
                    {errors.periodoEscolar ? <div className="invalid-feedback">{errors.periodoEscolar}</div> : null}
                  </div>
                  <div className="col-4">
                    <label className="form-label" htmlFor="grado">Grado</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="emplaedo" id="grado" aria-describedby="empleado-addon" name="grado" onChange={handleChange} value={inscripcion.grado}>
                        <option value="0">Seleccione un Grado...</option>
                        {
                          grados.map((grado, index) => {
                            return (<option value={grado.id} key={index}>{grado.grados}</option>)
                          })
                        }
                      </select>
                    </div>
                    {errors.grado ? <div className="invalid-feedback">{errors.grado}</div> : null}
                  </div>
                  <div className="col-4">
                    <label className="form-label" htmlFor="seccion">Seccion</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="emplaedo" id="seccion" aria-describedby="empleado-addon" name="seccion" onChange={handleChange} value={inscripcion.seccion}>
                        <option value="0">Seleccione una Seccion...</option>
                        {
                          secciones.map((seccion, index) => {
                            return (<option value={seccion.id} key={index}>
                              {seccion.secciones}
                            </option>)
                          })
                        }
                      </select>
                    </div>
                    {errors.seccion ? <div className="invalid-feedback">{errors.seccion}</div> : null}
                  </div>
                </div>
                <div className="row">
                  <div className="card-footer text-end pb-0" style={cardFooter}>
                    <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={salir}>Close</button>
                    <button type="button" className="btn bg-gradient-info" onClick={() => handleTabs('representante', 'inscripcion')} > Atras</button>
                    {
                      (valido)
                        ? <button type="submit" className="btn bg-gradient-info" onClick={handleSubmit}>Inscribir</button>
                        : <button type="submit" className="btn bg-gradient-info" disabled >Inscribir</button>
                    }
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormInscripcion
