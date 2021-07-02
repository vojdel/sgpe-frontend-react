import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import Form from './Form';
import Tabla from './Tabla';

const municipios = [
  {
    id: 1,
    estado: "Yaracuy",
    municipio: "Bruzual"
  },
  {
    id: 2,
    estado: "Lara",
    municipio: "Barquisimeto"
  },
  {
    id: 3,
    estado: "Yaracuy",
    municipio: "San Felipe"
  },
  {
    id: 4,
    estado: "Yaracuy",
    municipio: "Independencia"
  },
  {
    id: 5,
    estado: "Trujillo",
    municipio: "No se"
  },
]

const nombres = ["id", "estado", "municipio", "action"]

const Municipio = () => {

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-between">
        <div className="col-md-10 bg-white border-radius-lg d-flex me-2">
          <input type="text" className="form-control border-0 ps-3" placeholder="Type here..." />
          <button className="btn bg-gradient-primary my-1 me-1">Search</button>
        </div>
        <div className="col-md-1 text-end">
          <button type="button" className="btn bg-gradient-info btn-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </button>
        </div>
        <Form
        />
      </div>
      <div className="row ps-5">
        <Tabla
          nombres={nombres}
          datas={municipios}
        />
      </div>
    </div>
  )
}
export default Municipio;
