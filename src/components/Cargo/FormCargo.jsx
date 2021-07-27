import { useState } from 'react'

/**
 * FormCargo.
 * @returns Modal de Cargo
 */
const FormCargo = () => {
  const initialCargo = {
    id: 0,
    cargo: ''
  }

  const [cargo, setCargo] = useState(initialCargo)

  /**
    * Manejar input cargo
    * @param {any} event
    * */
  const handleCargo = (event) => {
    setCargo({
      ...cargo,
      cargo: event.target.value
    })
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Cargo</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Cargo</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el cargo aqui..." aria-label="Cargo" aria-describedby="cargo-addon" onChange={handleCargo} value={cargo.cargo} />
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
export default FormCargo
