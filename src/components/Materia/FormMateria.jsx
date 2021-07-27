import { useState } from 'react'

/**
 * FormMateria.
 * @returns Modal de Materia
 */
const FormMateria = () => {
  const initialMateria = {
    id: 0,
    materia: ''
  }

  const [materia, setMateria] = useState(initialMateria)

  /**
    * Manejar input materia
    * @param {any} event
    * */
  const handleMateria = (event) => {
    setMateria({
      ...materia,
      materia: event.target.value
    })
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Materia</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Materia</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe la materia aqui..." aria-label="Materia" aria-describedby="materia-addon" onChange={handleMateria} value={materia.materia} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn bg-gradient-info">Registrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FormMateria
