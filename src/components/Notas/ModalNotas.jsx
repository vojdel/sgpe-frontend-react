import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNotasEstudiante } from '../../hooks/useNotasEstudiante'
import { getNotasEstudiante, getNotas, createNotaEstudiante, updateNotasEstudiante } from '../../services/notas'
import toast from 'react-hot-toast'

const ModalNotas = ({ id, materia, setRegistro, changeId, changeMateria, grupoId }) => {
  const [estudiante, setEstudiante] = useState('')
  const primerLapso = useNotasEstudiante({ type: 'number', name: 'primerLapso', lapso: 1 })
  const segundoLapso = useNotasEstudiante({ type: 'number', name: 'segundoLapso', lapso: 2 })
  const tercerLapso = useNotasEstudiante({ type: 'number', name: 'tercerLapso', lapso: 3 })

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleSubmit = (event) => {
    event.preventDefault()
    if (primerLapso.data().id === 0 && segundoLapso.data().id === 0 && tercerLapso.data().id === 0) {
      createNotaEstudiante({
        notas: [
          primerLapso.data(),
          segundoLapso.data(),
          tercerLapso.data()
        ]
      }).then(response => {
        toast.success('Se añadio la nota')
        clean()
        getNotas(grupoId, materia).then(response => {
          setRegistro(response.data)
        })
      })
    } else {
      updateNotasEstudiante(id, {
        notas: [
          primerLapso.data(),
          segundoLapso.data(),
          tercerLapso.data()
        ]
      }).then(response => {
        toast.success('Se modificó la nota')
        clean()
        getNotas(grupoId, materia).then(response => {
          setRegistro(response.data)
        })
      })
    }
  }

  const clean = () => {
    primerLapso.reset()
    segundoLapso.reset()
    tercerLapso.reset()
    setEstudiante('')
    changeId(0)
  }

  useEffect(() => {
    if (id !== 0) {
      getNotasEstudiante(id, materia)
        .then(response => {
          return response.data
        })
        .then(data => {
          const { nombre, apellido, notas } = data
          const [initPrimerLapso, initSegundoLapso, initTercerLaso] = notas
          setEstudiante(`${nombre} ${apellido}`)
          primerLapso.setInit(initPrimerLapso)
          segundoLapso.setInit(initSegundoLapso)
          tercerLapso.setInit(initTercerLaso)
        })
    }
  }, [id])

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Notas</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clean}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <div className="row">
                <label htmlFor="estudiante">Estudiante: </label>
                <div className="input-group mb-3">
                  <input name="estudiante" id="estudiante" value={estudiante} className="form-control" readOnly />
                </div>
                <div className="row">
                  <label htmlFor="primerLapso">Primer Lapso: </label>
                  <div className="input-group mb-3">
                    <input {...primerLapso} id="primerLapso" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <label htmlFor="segundoLapso">Segundo Lapso: </label>
                  <div className="input-group mb-3">
                    <input {...segundoLapso} id="segundoLapso" className="form-control" />
                  </div>
                </div>
                <div className="row"> <label htmlFor="asistio">Tercer Lapso: </label>
                  <div className="input-group mb-3">
                    <input {...tercerLapso} id="asistio" className="form-control" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
            <button type="submit" className="btn bg-gradient-info" data-bs-dismiss="modal" onClick={handleSubmit}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

ModalNotas.propTypes = {
  id: PropTypes.number,
  materia: PropTypes.number,
  setRegistro: PropTypes.func,
  changeId: PropTypes.func,
  changeMateria: PropTypes.func,
  grupoId: PropTypes.number
}

export default ModalNotas
