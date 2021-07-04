import {useState} from "react";

const Form = () => {

  const initialTipoAlergia = {
    id: 0,
    tipo_alergia: ""
  }
  const [tipoAlergia, setTipoAlergia] = useState(initialTipoAlergia);

  const handleTipoAlergia = (event) => {
    setTipoAlergia({
      ...tipoAlergia,
      tipo_alergia: event.target.value
    })
  }

  const handleClear = () => {
    setTipoAlergia(initialTipoAlergia)
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Estado</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClear}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Tipo de Alergia</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el tipo de alergia aqui..." aria-label="TipoAlergia" aria-describedby="tipoAlergia-addon" onChange={handleTipoAlergia} value={tipoAlergia.tipo_alergia} />
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
export default Form;
