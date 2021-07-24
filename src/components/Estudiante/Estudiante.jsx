import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormEstudiante from './FormEstudiante'
import TablaEstudiante from './TablaEstudiante'
import { useEffect, useState } from 'react'
// import { getAll } from '../../services/estado.js'

const Estudiante = () => {
  const nombres = ['id', 'estudiante', 'action']

  const initialEstudiante = [
    {
      id: 1,
      estudiante: 'Jose Daniel Vasquez Pineda'
    },
    {
      id: 1,
      estudiante: 'Jose Daniel Vasquez Pineda'
    },
    {
      id: 1,
      estudiante: 'Jose Daniel Vasquez Pineda'
    },
    {
      id: 1,
      estudiante: 'Jose Daniel Vasquez Pineda'
    },
    {
      id: 1,
      estudiante: 'Jose Daniel Vasquez Pineda'
    },
    {
      id: 1,
      estudiante: 'Jose Daniel Vasquez Pineda'
    },
    {
      id: 1,
      estudiante: 'Jose Daniel Vasquez Pineda'
    },
    {
      id: 1,
      estudiante: 'Jose Daniel Vasquez Pineda'
    }
  ]

  const [estudiante, setEstudiante] = useState([])

  useEffect(() => {
    setEstudiante(initialEstudiante)
  }, [])

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
        <FormEstudiante />
      </div>
      <div className="row ps-5">
        <TablaEstudiante
          nombres={nombres}
          datas={estudiante}
        />
      </div>
    </div>
  )
}
export default Estudiante
