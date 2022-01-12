import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TablaInscripcion from './TablaInscripcion'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getAll, search } from '../../services/service.js'

const Inscripcion = () => {
  const nombres = ['id', 'cedula', 'estudiante', 'grado', 'seccion', 'action']

  const initialInscritos = [
    {
      id: 0,
      cedula: 0,
      nombre: 'Jose Daniel Vasquez Pineda',
      grado: 0,
      seccion: ''
    }
  ]

  const history = useHistory()

  const [inscritos, setInscritos] = useState(initialInscritos)
  const [busqueda, setBusqueda] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setBusqueda(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    search('inscripcion', busqueda)
      .then((response) => {
        return response.data
      }).then(data => {
        setInscritos(data)
      })
      .catch(() => {
        setInscritos([
          {
            id: 0,
            cedula: 0,
            nombre: 'No Existen registros',
            grado: 0,
            seccion: ''
          }
        ])
      })
  }

  useEffect(() => {
    getAll('inscripcion').then((response) => {
      return response.data
    }).then((data) => {
      if (data.length !== 0) {
        setInscritos(data)
      } else {
        setInscritos([{
          id: 0,
          cedula: 27122644,
          nombre: 'No Existen registros',
          grado: 0,
          seccion: ''
        }])
      }
    }).catch(() => {
      setInscritos([{
        id: 0,
        cedula: 27122644,
        nombre: 'No Existen registros',
        grado: 0,
        seccion: ''
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
          <button type="button" className="btn bg-gradient-info btn-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => history.push('/inscripcion/form')}>
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </button>
        </div>
      </div>
      <div className="row ps-5">
        <TablaInscripcion
          nombres={nombres}
          datas={inscritos}
          changeRegistro={setInscritos}
        />
      </div>
    </div>
  )
}
export default Inscripcion
