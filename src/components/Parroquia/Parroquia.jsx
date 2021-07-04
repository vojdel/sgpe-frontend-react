import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import Form from './Form';
import Tabla from './Tabla';

const municipios = [
  {
    id: 1,
    municipio: "Bruzual",
    parroquia: "Bruzual"
  },
  {
    id: 2,
    municipio: "Barquisimeto",
    parroquia: "nose"
  },
  {
    id: 3,
    municipio: "San Felipe",
    parroquia: "San Felipe"
  },
  {
    id: 4,
    municipio: "Independencia",
    parroquia: "nose"
  },
  {
    id: 5,
    municipio: "No se",
    parroquia: "No se"
  },
]

const nombres = ["id", "municipio", "parroquia", "action"]

const Parroquia = () => {

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
export default Parroquia;
