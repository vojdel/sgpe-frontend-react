import { useState } from 'react'

/**
 * FormGrado.
 * @returns Modal de Grado
 */
const FormGrado = () => {
  const initialGrado = {
    id: 0,
    grado: ''
  }

  const [grado, setGrado] = useState(initialGrado)

  /**
    * Manejar input grado
    * @param {any} event
    * */
  const handleGrado = (event) => {
    setGrado({
      ...grado,
      grado: event.target.value
    })
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Grado</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Grado</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el grado aqui..." aria-label="Grado" aria-describedby="grado-addon" onChange={handleGrado} value={grado.grado} />
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
export default FormGrado
