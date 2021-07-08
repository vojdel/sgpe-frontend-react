import { useState } from 'react'

const Form = () => {
  const initialTipoDiscapacidad = {
    id: 0,
    tipo_disc: ''
  }
  const [tipoDiscapacidad, setTipoDiscapacidad] = useState(initialTipoDiscapacidad)

  const handleTipoDiscapacidad = (event) => {
    setTipoDiscapacidad({
      ...tipoDiscapacidad,
      tipo_disc: event.target.value
    })
  }

  const handleClear = () => {
    setTipoDiscapacidad(initialTipoDiscapacidad)
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Estado</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClear}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Tipo de Discapacidad</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el tipo de discapacidad aqui..." aria-label="TipoDiscapacidad" aria-describedby="tipoDiscapacidad-addon" onChange={handleTipoDiscapacidad} value={tipoDiscapacidad.tipo_disc} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={handleClear}>Close</button>
            <button type="button" className="btn bg-gradient-info">Registrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form
