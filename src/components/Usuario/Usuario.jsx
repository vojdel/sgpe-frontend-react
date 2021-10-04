import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormUsuario from './FormUsuario'
import TablaUsuario from './TablaUsuario'
import { useEffect, useState } from 'react'
import { getAll, search } from '../../services/service.js'

const Usuario = () => {
  const nombres = ['id', 'usuario', 'action']

  const initialUsuario = [
    {
      id: 1,
      nombre: 'Cargando Registros'
    }
  ]

  const [usuario, setUsuario] = useState(initialUsuario)
  const [id, setId] = useState(0)
  const [busqueda, setBusqueda] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setBusqueda(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    search('usuario', busqueda)
      .then(function (response) {
        console.log(response.data)
        return response.data
      }).then(data => {
        setUsuario(data)
      })
      .catch(() => {
        setUsuario([
          {
            id: 0,
            nombre: 'No existen Registros'
          }
        ])
      })
  }

  useEffect(() => {
    getAll('usuario').then((response) => {
      return response.data
    }).then((data) => {
      console.log(data)
      if (data.length !== 0) {
        setUsuario(data)
      } else {
        setUsuario([{
          id: 0,
          nombre: 'No existen Registros'
        }])
      }
    }).catch(() => {
      setUsuario([{
        id: 0,
        nombre: 'No existen Registros'
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
        <FormUsuario id={id} setRegistro={setUsuario} changeId={setId} />
      </div>
      <div className="row ps-5">
        <TablaUsuario
          nombres={nombres}
          datas={usuario}
          changeRegistro={setUsuario}
          changeId={setId}
        />
      </div>
    </div>
  )
}
export default Usuario
