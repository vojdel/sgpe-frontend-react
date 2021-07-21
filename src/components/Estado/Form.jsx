import { useState } from 'react'

/**
 * Form.
 * @returns Modal de Estado
 */
const Form = () => {
  const initialEstado = {
    id: 0,
    estado: ''
  }

  const [estado, setEstado] = useState(initialEstado)

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleEstado = (event) => {
    setEstado({
      ...estado,
      estado: event.target.value
    })
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Estado</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Estado</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el estado aqui..." aria-label="Estado" aria-describedby="estado-addon" onChange={handleEstado} value={estado.estado} />
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
export default Form
