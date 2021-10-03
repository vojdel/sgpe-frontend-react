import { useState, useEffect } from 'react'
import { PeriodoEscolarSchema } from './PeriodoEscolarSchema'
import { validaciones, cleanForm } from '../../util/validations.js'
import PropTypes from 'prop-types'
import { getAll, getOne, create, update } from '../../services/service.js'
import { object } from 'yup'

const Form = ({ id, setRegistro, changeId }) => {
  const anio = new Date().getFullYear()
  const initialPeriodoEscolar = {
    anio_ini: anio - 1,
    anio_fin: anio
  }
  const initialError = {
    anio_ini: '',
    anio_fin: ''
  }

  const [periodoEscolar, setPeriodoEscolar] = useState(initialPeriodoEscolar)
  const [errors, setErrors] = useState(initialError)
  const [valido, setValido] = useState(false)

  useEffect(() => {
    if (id !== 0) {
      getOne(id, 'periodoescolar').then(data => {
        setPeriodoEscolar(data[0])
        setValido(true)
        const formulario = document.querySelector('#formPeriodoEscolar').elements
        formulario.anio_ini.classList.add('is-valid')
        formulario.anio_fin.classList.add('is-valid')
      })
    }
  }, [id])

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleChange = ({ target }) => {
    const { value, name, classList } = target
    setPeriodoEscolar({
      ...periodoEscolar,
      [name]: value
    })
    validaciones(PeriodoEscolarSchema[name], name, value, errors, setErrors, classList)
  }

  const clean = () => {
    cleanForm(setPeriodoEscolar, initialPeriodoEscolar, setErrors, initialError, ['anio_ini', 'anio_fin'])
    changeId(0)
    setTimeout(() => {
      setValido(false)
    }, 1000)
  }

  /**
  * Manejar input estado
  * @param {any} event
  * */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (id === 0) {
      create('periodoescolar', periodoEscolar).then(response => {
        clean()
        console.log(response)
        getAll('periodoescolar').then(response => {
          console.log(response.data)
          setRegistro(response.data)
        }).finally(() => {
          setValido(false)
        })
      })
    } else {
      update(id, 'periodoescolar', periodoEscolar).then(response => {
        clean()
        console.log(response)
        getAll('periodoescolar').then(response => {
          setRegistro(response.data)
        })
      }).finally(() => {
        setValido(false)
      })
    }
  }

  const handleErrors = async () => {
    const validacion = await object().shape(PeriodoEscolarSchema).isValid(periodoEscolar)
    setValido(validacion)
  }

  useEffect(() => {
    handleErrors()
  }, [errors])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">PeriodoEscolar</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left" id="formPeriodoEscolar">
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Inicio del Año Escolar:</label>
                <div className="input-group mb-3">
                  <input type="number" className="form-control" placeholder="Escribe el periodoEscolar aqui..." aria-label="PeriodoEscolar" aria-describedby="anio_ini-addon" name="anio_ini" onChange={handleChange} value={periodoEscolar.anio_ini} />
                </div>
                {errors.anio_ini ? <div className="invalid-feedback">{errors.anio_ini}</div> : null}
              </div>
              <label>Fin del Año Escolar:</label>
              <div className="input-group mb-3">
                <input type="number" className="form-control" placeholder="Escribe el periodoEscolar aqui..." aria-label="PeriodoEscolar" aria-describedby="anio_fin-addon" name="anio_fin" onChange={handleChange} value={periodoEscolar.anio_fin} />
                {errors.anio_fin ? <div className="invalid-feedback">{errors.anio_fin}</div> : null}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            {(valido)
              ? <button type="submit" className="btn bg-gradient-info" onClick={handleSubmit}>
                {(id === 0) ? 'Registrar' : 'Editar'}
              </button>
              : <button type="button" className="btn bg-gradient-info" disabled>
                {(id === 0) ? 'Registrar' : 'Editar'}
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

Form.propTypes = {
  id: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default Form
