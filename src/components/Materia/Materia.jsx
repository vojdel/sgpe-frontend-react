import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormMateria from './FormMateria'
import TablaMateria from './TablaMateria'
import { useEffect, useState } from 'react'
import { getAll, search } from '../../services/service.js'

const Materia = () => {
  const nombres = ['id', 'materia', 'action']

  const initialMateria = [
    {
      id: 1,
      nombre: 'Cargando Registros'
    }
  ]

  const [materia, setMateria] = useState(initialMateria)
  const [id, setId] = useState(0)
  const [busqueda, setBusqueda] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setBusqueda(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    search('materia', busqueda)
      .then(function (response) {
        console.log(response.data)
        return response.data
      }).then(data => {
        if (data.length !== 0) {
          setMateria(data)
        } else {
          setMateria([{
            id: 0,
            nombre: 'No hay materias registradas'
          }])
        }
      })
      .catch(() => {
        setMateria([
          {
            id: 0,
            nombre: 'No existen Registros'
          }
        ])
      })
  }

  useEffect(() => {
    getAll('materia').then(function (response) {
      console.log(response.data)
      return response.data
    }).then((data) => {
      if (data.length !== 0) {
        setMateria(data)
      } else {
        setMateria([{
          id: 0,
          nombre: 'No hay materias registradas'
        }])
      }
      console.log(data)
    }).catch(() => {
      setMateria([
        {
          id: 0,
          nombre: 'No existen Registros'
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
        <FormMateria id={id} setRegistro={setMateria} changeId={setId} />
      </div>
      <div className="row ps-5">
        <TablaMateria
          nombres={nombres}
          datas={materia}
          changeRegistro={setMateria}
          changeId={setId}
        />
      </div>
    </div>
  )
}
export default Materia
