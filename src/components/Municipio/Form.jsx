import { useState, useEffect } from 'react'
import { MunicipioSchema } from './MunicipioSchema'
import { validaciones, esValido, cleanForm } from '../../util/validations.js'

const Form = () => {
  const initialMunicipio = {
    id: 0,
    estado_id: 0,
    municipio: ''
  }
  const initialError = {
    esValido: false,
    id: '',
    estado_id: '',
    municipio: ''
  }
  const [municipio, setMunicipio] = useState(initialMunicipio)
  const [errors, setErrors] = useState(initialError)

  useEffect(() => {
    // esValido(MunicipioSchema, municipio, errors, setErrors)
    setErrors({
      ...errors,
      esValido: esValido(MunicipioSchema, municipio)
    })
  }, [municipio])

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleChange = (event) => {
    setMunicipio({
      ...municipio,
      [event.target.name]: event.target.value
    })
    validaciones(MunicipioSchema, event.target.name, event.target.value, errors, setErrors, event.target.classList)
    console.log(errors)
  }

  const clean = () => {
    cleanForm(setMunicipio, initialMunicipio, setErrors, initialError, ['estado_id', 'municipio'])
  }

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    cleanForm(setMunicipio, initialMunicipio, setErrors, initialError, ['estado_id', 'municipio'])
    console.log(municipio)
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Municipio</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Estado:</label>
                <select className="form-control" id="exampleFormControlSelect2" name="estado_id" onChange={handleChange} value={municipio.estado_id}>
                  <option value="0">Seleccione...</option>
                  <option value="1">Yaracuy</option>
                  <option value="2">Lara</option>
                  <option value="3">Bolivar</option>
                  <option value="4">Trujillo</option>
                  <option value="5">Falcon</option>
                </select>
                {errors.estado_id ? <div className="invalid-feedback">{errors.estado_id}</div> : null}
              </div>
              <label>Municipio</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el municipio aqui..." aria-label="Municipio" aria-describedby="municipio-addon" name="municipio" onChange={handleChange} value={municipio.municipio} />
                {errors.municipio ? <div className="invalid-feedback">{errors.municipio}</div> : null}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            {(errors.esValido)
              ? <button type="submit" className="btn bg-gradient-info" onClick={handleSubmit}>Registrar</button>
              : <button type="button" className="btn bg-gradient-info" disabled>Registrar</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form
