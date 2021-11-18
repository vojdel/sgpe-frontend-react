import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { getAll } from '../../services/notas.js'
import TablaNotasGrupo from './TablaNotasGrupo'
import FormNotasGrupo from './FormNotasGrupo'

const Notas = () => {
  const initialNotas = [
    {
      id: 0,
      periodo_escolar: 'Cargando',
      materia: ' Registros',
      grado: '',
      seccion: ''
    }
  ]

  const nombres = [
    'Id', 'Periodo Escolar', 'Materia', 'Grado', 'Sección', 'Acción'
  ]

  const [notas, setNotas] = useState(initialNotas)
  const [id, setId] = useState(0)
  const [busqueda, setBusqueda] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setBusqueda(event.target.value)
  }

  useEffect(() => {
    getAll().then(response => {
      setNotas(response.data)
    }).catch(() => {
      setNotas([{
        id: 0,
        periodo_escolar: 'No ',
        materia: 'hay',
        grado: 'Registros',
        seccion: ''
      }])
    })
  }, [])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-between">
        <div className="col-md-10 bg-white border-radius-lg d-flex me-2">
          <input type="text" className="form-control border-0 ps-3" placeholder="Type here..." value={busqueda} onChange={handleChange} />
          <button className="btn bg-gradient-primary my-1 me-1">Search</button>
        </div>
        <div className="col-md-1 text-end">
          <button type="button" className="btn bg-gradient-info btn-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </button>
        </div>
      </div>
      <FormNotasGrupo id={id} setRegistro={setNotas} changeId={setId} />
      <div className="row ps-5">
        <TablaNotasGrupo
          nombres={nombres}
          datas={notas}
          changeRegistro={setNotas}
          changeId={setId}
        />
      </div>
    </div>
  )
}
export default Notas
