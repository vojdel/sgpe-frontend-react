import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormAlergia from './FormAlergia'
import TablaAlergia from './TablaAlergia'
import { useEffect, useState } from 'react'

const Alergia = () => {
  const nombres = ['id', 'tipo de alergia', 'action']

  const initialAlergia = [
    {
      id: 1,
      alergia: 'Refriado'
    },
    {
      id: 1,
      alergia: 'Refriado'
    },
    {
      id: 1,
      alergia: 'Refriado'
    },
    {
      id: 1,
      alergia: 'Refriado'
    },
    {
      id: 1,
      alergia: 'Refriado'
    }
  ]

  const sections = [
    {
      id: 1,
      tipo_alergias: 'Refriado'
    }
  ]

  const [alergias, setAlergias] = useState([])
  const [alergia, setAlergia] = useState({
    id: 0,
    alergia: '',
    tipo_alergias: 0
  })

  useEffect(() => {
    setAlergias(initialAlergia)
  }, [])

  const create = (values) => {
    setAlergias([...alergias, values])
  }

  const delete = (id) => {
    setAlergias(alergias.filter(alergia => alergia.id !== id))
  };

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
        <FormAlergia
          initial={alergia}
          submit={create}
          sections={sections}
        />
      </div>
      <div className="row ps-5">
        <TablaAlergia
          nombres={nombres}
          datas={alergias}
          editar={setAlergia}
    eliminar={delete}
        />
      </div>
    </div>
  )
}
export default Alergia
