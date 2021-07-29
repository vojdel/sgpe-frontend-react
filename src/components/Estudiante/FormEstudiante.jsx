import { useState, useEffect } from 'react'
import { EstudianteSchema } from './EstudianteSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'

/**
 * FormEstudiante.
 * @returns Modal de Estudiante
 */
const FormEstudiante = () => {
  const initialEstudiante = {
    id: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    sex: 'Masculino',
    telefono: '',
    direccion: '',
    municipality: 0,
    fecha_nacimiento: '',
    lugar_nacimiento: '',
    descripcion: '',
    estatura: '',
    peso: '',
    talla: '',
    t_sangre: ''
  }

  const initialError = {
    esValido: false,
    id: '',
    cedula: '',
    nombre: '',
    apellido: '',
    sex: '',
    telefono: '',
    direccion: '',
    municipality: '',
    fecha_nacimiento: '',
    lugar_nacimiento: '',
    descripcion: '',
    estatura: '',
    peso: '',
    talla: '',
    t_sangre: ''
  }

  const nameOfForm = [
    'cedula',
    'nombre',
    'apellido',
    'sex',
    'telefono',
    'direccion',
    'municipality',
    'fecha_nacimiento',
    'lugar_nacimiento',
    'descripcion',
    'estatura',
    'peso',
    'talla',
    't_sangre'
  ]

  const [estudiante, setEstudiante] = useState(initialEstudiante)
  const [errors, setErrors] = useState(initialError)

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleChange = (event) => {
    setEstudiante({
      ...estudiante,
      [event.target.name]: event.target.value
    })
    validaciones(
      EstudianteSchema[event.target.name],
      event.target.name,
      event.target.value,
      errors,
      setErrors,
      event.target.classList
    )
  }

  const clean = () => {
    cleanForm(setEstudiante, initialEstudiante, setErrors, initialError, nameOfForm)
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    cleanForm(setEstudiante, initialEstudiante, setErrors, initialError, nameOfForm)
  }

  /**
    * @param {string} show
    * @param {string} hidden
    * @return {void}
    * */
  const handleTabs = (show, hidden) => {
    const showContent = document.querySelector(`#nav-${show}`)
    const showTabContent = document.querySelector(`#nav-${show}-tab`)
    const hiddenContent = document.querySelector(`#nav-${hidden}`)
    const hiddenTabContent = document.querySelector(`#nav-${hidden}-tab`)

    showTabContent.classList.add('active')
    hiddenTabContent.classList.remove('active')

    showContent.classList.remove('d-none')
    showContent.classList.remove('fade')
    showContent.classList.add('show')
    showContent.classList.add('active')
    hiddenContent.classList.remove('active')
    hiddenContent.classList.remove('show')
    hiddenContent.classList.add('d-none')
  }

  useEffect(() => {
    setErrors({
      ...errors,
      esValido: esValido(nameOfForm, errors)
    })
    console.log(esValido(nameOfForm, errors))
  }, [personal])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-end">
            <div className="row">
              <div className="col-10">
                <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Estudiante</h3>
              </div>
              <div className="col-md-2">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
              </div>
              <div className="col-12">
                <nav style={{ marginBottom: '-1.05em' }}>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-home" aria-selected="true">Datos Generales</a>
                    <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#" role="tab" aria-controls="nav-profile" aria-selected="false">Datos Medicos</a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="modal-body tab-content" id="nav-tabContent">
            <form role="form text-left">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Cedula</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="1.234.567" aria-label="Cedula" aria-describedby="cedula-addon" onChange={handleChange} name="cedula" value={estudiante.cedula} />
                      {errors.cedula ? <div className="invalid-feedback">{errors.cedula}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Sexo</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Sexo" aria-describedby="sexo-addon" onChange={handleChange} name="sex" value={estudiante.sex} >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                      </select>
                      {errors.sex ? <div className="invalid-feedback">{errors.sex}</div> : null}
                    </div>
                  </div>
                </div>
                <label>Nombre(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe el nombre aqui..." aria-label="Nombre" aria-describedby="nombre-addon" onChange={handleChange} name="nombre" value={estudiante.nombre} />
                      {errors.nombre ? <div className="invalid-feedback">{errors.nombre}</div> : null}
                </div>
                <label>Apellido(s)</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe el apellido aqui..." aria-label="Apellido" aria-describedby="estado-addon" onChange={handleChange} name="apellido" value={estudiante.apellido} />
                      {errors.apellido ? <div className="invalid-feedback">{errors.apellido}</div> : null}
                </div>
                <label>Telefono</label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" placeholder="Escribe el Telefono aqui..." aria-label="Telefono" aria-describedby="telefono-addon" onChange={handleChange} name="telefono" value={estudiante.telefono} />
                      {errors.telefono ? <div className="invalid-feedback">{errors.telefono}</div> : null}
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Estado</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Estado" aria-describedby="estado-addon" name="sex" >
                        <option value="0">Seleccione...</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Municipio</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Municipio" aria-describedby="municipality-addon" onChange={handleChange} name="municipality" value={estudiante.municipality} >
                        <option value="0">Seleccione...</option>
                        <option value="1">Yaracuy</option>
                      </select>
                      {errors.municipality ? <div className="invalid-feedback">{errors.municipality}</div> : null}
                    </div>
                  </div>
                </div>
                <label>Dirección</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe la dirección aqui..." aria-label="Direccion" aria-describedby="direccion-addon" onChange={handleChange} name="direccion" value={estudiante.direccion} />
                      {errors.direccion ? <div className="invalid-feedback">{errors.direccion}</div> : null}
                </div>
                <label>fecha de nacimiento</label>
                <div className="input-group mb-3">
                  <input type="date" className="form-control" aria-label="Facha de nacimiento" aria-describedby="fecha_nacimiento-addon" onChange={handleChange} name="fecha_nacimiento" value={estudiante.fecha_nacimiento} />
                      {errors.fecha_nacimiento ? <div className="invalid-feedback">{errors.fecha_nacimiento}</div> : null}
                </div>
                <label>Lugar de Nacimiento</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Escribe el Lugar de nacimiento aqui..." aria-label="Lugar de Nacimiento" aria-describedby="lugar_nacimiento-addon" onChange={handleChange} name="lugar_nacimiento" value={estudiante.lugar_nacimiento} />
                      {errors.lugar_nacimiento ? <div className="invalid-feedback">{errors.lugar_nacimiento}</div> : null}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
                  <button type="button" className="btn bg-gradient-info" onClick={() => handleTabs('profile', 'home')} > Continuar</button>
                </div>
              </div>

              <div className="tab-pane fade d-none" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Estatura</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="Escribe la estatura aqui..." aria-label="Estatura" aria-describedby="estatura-addon" onChange={handleChange} name="estatura" value={estudiante.estatura} />
                      {errors.estatura ? <div className="invalid-feedback">{errors.estatura}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Peso</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="Escribe el peso aqui..." aria-label="Peso" aria-describedby="peso-addon" onChange={handleChange} name="peso" value={estudiante.peso} />
                      {errors.peso ? <div className="invalid-feedback">{errors.peso}</div> : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Talla</label>
                    <div className="input-group mb-3">
                      <input type="number" className="form-control" placeholder="Escribe La talla aqui..." aria-label="Talla" aria-describedby="talla-addon" onChange={handleChange} name="talla" value={estudiante.talla} />
                      {errors.talla ? <div className="invalid-feedback">{errors.talla}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12 d-inline-block">
                    <label>Tipo de Sangre</label>
                    <div className="input-group mb-3">
                      <select className="form-control" aria-label="Tipo de Sangre" aria-describedby="t_sangre-addon" onChange={handleChange} name="t_sangre" value={estudiante.t_sangre} >
                        <option value="">Seleccione...</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                      </select>
                      {errors.t_sangre ? <div className="invalid-feedback">{errors.t_sangre}</div> : null}
                    </div>
                  </div>
                </div>
                <label>Descripción</label>
                <div className="input-group mb-3">
                  <textarea className="form-control" placeholder="Escribe la Descripción aqui..." aria-label="Descripcion" aria-describedby="descripcion-addon" onChange={handleChange} name="descripcion" value={estudiante.descripcion} ></textarea>
                      {errors.descripcion ? <div className="invalid-feedback">{errors.descripcion}</div> : null}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn bg-gradient-danger" data-bs-dismiss="modal" onClick={clean}>Close</button>
                  <button type="button" className="btn bg-gradient-warning" onClick={() => handleTabs('home', 'profile')}>Atras</button>
                  <button type="button" className="btn bg-gradient-info">Registrar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
export default FormEstudiante
