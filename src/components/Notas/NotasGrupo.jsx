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

  useEffect(() => {
    getAll().then(response => {
      setNotas(response.data)
    })
  }, [])

  return (
    <div className="row w-100 justify-content-md-center">
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
