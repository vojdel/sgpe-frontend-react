import { useEffect, useState } from 'react'
import { getNotas } from '../../services/notas.js'
import TablaNotasEstudiante from './TablaNotasEstudiante'
import ModalNotas from './ModalNotas'
import { useParams } from 'react-router-dom'

const NotasEstudiantes = () => {
  const initialNotas = [
    {
      id: 0,
      nombre: 'Cargando',
      apellido: ' Registros',
      perimerLapso: 0,
      segundoLapso: 0,
      tercerLapso: 0
    }
  ]

  const nombres = [
    'Estudiante', 'Primer Lapso', 'Segundo Lapso', 'Tercer Lapso', 'Total'
  ]

  const { grupoId } = useParams()
  const [notas, setNotas] = useState(initialNotas)
  const [id, setId] = useState(0)

  useEffect(() => {
    console.log(grupoId)
    getNotas(grupoId).then(response => {
      setNotas(response.data)
    })
  }, [])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-between">
      </div>
      <ModalNotas id={id} setRegistro={setNotas} changeId={setId} grupoId={grupoId} />
      <div className="row ps-5">
        <TablaNotasEstudiante
          nombres={nombres}
          datas={notas}
          changeId={setId}
        />
      </div>
    </div>
  )
}
export default NotasEstudiantes
