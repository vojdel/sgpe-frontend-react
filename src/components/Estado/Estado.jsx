import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import FormEstado from './FormEstado';
import TablaEstado from './TablaEstado';
import {useState} from 'react';

const estados = [
  {
    id: 1,
    estado: "Yaracuy"
  },
  {
    id: 2,
    estado: "Lara"
  },
  {
    id: 3,
    estado: "Bolivar"
  },
  {
    id: 4,
    estado: "Anzuategi"
  },
  {
    id: 5,
    estado: "Trujillo"
  },
]

const nombres = ["id", "estado", "action"]

const Estado = () => {

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
        <FormEstado
        />
      </div>
      <div className="row ps-5">
        <TablaEstado
          nombres={nombres}
          datas={estados}
        />
      </div>
    </div>
  )
}
export default Estado;
