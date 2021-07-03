import {useState} from 'react';

const Form = () => {

  const initialParroquia = {
    id: 0,
    estado_id: 0,
    municipio_id: 0,
    parroquia: ""
  }

  const [parroquia, setParroquia] = useState(initialParroquia);

  const handleEstado = (event) => {
    setParroquia({
      ...parroquia,
      estado_id: event.target.value
    })
  }

  const handleMunicipio = (event) => {
    setParroquia({
      ...parroquia,
      municipio_id: event.target.value
    })
  }

  const handleParroquia = (event) => {
    setParroquia({
      ...parroquia,
      parroquia: event.target.value
    })
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Estado</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <div className="form-group">
                <label for="exampleFormControlSelect1">Estado:</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={handleEstado}>
                  <option value="1">Yaracuy</option>
                  <option value="2">Lara</option>
                  <option value="3">Bolivar</option>
                  <option value="4">Trujillo</option>
                  <option value="5">Falcon</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect2">Municipio:</label>
                <select className="form-control" id="exampleFormControlSelect2" onChange={handleMunicipio}>
                  <option value="1">Bruzual</option>
                  <option value="2">No se</option>
                  <option value="3">no se</option>
                  <option value="4">no se</option>
                  <option value="5">nose</option>
                </select>
              </div>
              <label>Parroquia</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el parroquia aqui..." aria-label="Parroquia" aria-describedby="parroquia-addon" onChange={handleParroquia} />
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
export default Form;
