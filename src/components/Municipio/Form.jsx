import {useState} from 'react';

const Form = () => {

  const initialMunicipio = {
    id: 0,
    estado_id: 0,
    municipio: ""
  }

  const [municipio, setMunicipio] = useState(initialMunicipio);

  const handleEstado = (event) => {
    setMunicipio({
      ...municipio,
      estado_id: event.target.value
    })
  }

  const handleMunicipio = (event) => {
    setMunicipio({
      ...municipio,
      municipio: event.target.value
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
                <label for="exampleFormControlSelect2">Estado:</label>
                <select className="form-control" id="exampleFormControlSelect2" onChange={handleEstado} value={ municipio.estado_id }>
                  <option value="1">Yaracuy</option>
                  <option value="2">Lara</option>
                  <option value="3">Bolivar</option>
                  <option value="4">Trujillo</option>
                  <option value="5">Falcon</option>
                </select>
              </div>
              <label>Municipio</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el municipio aqui..." aria-label="Municipio" aria-describedby="municipio-addon" onChange={handleMunicipio} value={municipio.municipio} />
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
