import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormCargo from './FormCargo'
import TablaCargo from './TablaCargo'
import { useEffect, useState } from 'react'
import { getAll, search } from '../../services/service.js'

const Cargo = () => {
  const nombres = ['id', 'cargo', 'action']

  const initialCargo = [
    {
      id: 0,
      cargos: 'Cargando Registros'
    }
  ]

  const [cargo, setCargo] = useState(initialCargo)
  const [id, setId] = useState(0)
  const [busqueda, setBusqueda] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setBusqueda(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    search('cargo', busqueda)
      .then(function (response) {
        console.log(response.data)
        return response.data
      }).then(data => {
        setCargo(data)
      })
      .catch(() => {
        setCargo([
          {
            id: 0,
            cargos: 'No existen Registros'
          }
        ])
      })
  }

  useEffect(() => {
    getAll('cargo').then(function (response) {
      console.log(response.data)
      return response.data
    }).then((data) => {
      setCargo(data)
      console.log(data)
    }).catch(() => {
      setCargo([
        {
          id: 0,
          cargos: 'No existen Registros'
        }
      ])
    })
  }, [])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-between">
        <div className="col-md-10 bg-white border-radius-lg d-flex me-2">
          <input type="text" className="form-control border-0 ps-3" placeholder="Type here..." value={busqueda} onChange={handleChange} />
          <button className="btn bg-gradient-primary my-1 me-1" onClick={handleSearch}>Search</button>
        </div>
        <div className="col-md-1 text-end">
          <button type="button" className="btn bg-gradient-info btn-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </button>
        </div>
        <FormCargo id={id} setRegistro={setCargo} changeId={setId} />
      </div>
      <div className="row ps-5">
        <TablaCargo
          nombres={nombres}
          datas={cargo}
          changeRegistro={setCargo}
          changeId={setId}
        />
      </div>
    </div>
  )
}

export default Cargo
