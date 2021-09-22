import { useState, useEffect } from 'react'
import { getAll, search } from '../../services/service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'
import Tabla from './Tabla'

const Municipio = () => {
  const nombres = ['id', 'estado', 'municipio', 'action']

  const [municipios, setMunicipios] = useState([{
    id: 0,
    states: 'Cargando',
    municipalitys: 'Registros'
  }])
  const [id, setId] = useState(0)
  const [busqueda, setBusqueda] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setBusqueda(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    search('estado', busqueda)
      .then(function (response) {
        console.log(response.data)
        return response.data
      }).then(data => {
        setMunicipios(data)
      })
      .catch(() => {
        setMunicipios([
          {
            id: 0,
            states: 'No existen Registros',
            municipalitys: ''
          }
        ])
      })
  }

  useEffect(() => {
    getAll('municipio').then((response) => {
      return response.data
    }).then((data) => {
      setMunicipios(data)
    }).catch(() => {
      setMunicipios([{
        id: 0,
        states: 'No existen Registros',
        municipalitys: ''
      }])
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
        <Form id={id} setRegistro={setMunicipios} changeId={setId}
        />
      </div>
      <div className="row ps-5">
        <Tabla
          nombres={nombres}
          datas={municipios}
          changeRegistro={setMunicipios}
          changeId={setId}
        />
      </div>
    </div>
  )
}
export default Municipio
