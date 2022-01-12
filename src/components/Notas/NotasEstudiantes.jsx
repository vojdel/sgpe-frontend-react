import { useEffect, useState } from 'react'
import { getNotas } from '../../services/notas.js'
import TablaNotasEstudiante from './TablaNotasEstudiante'
import ModalNotas from './ModalNotas'
import { useParams, useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'

const NotasEstudiantes = () => {
  const initialNotas = {
    grupo: {
      empleado: '',
      grado: '',
      seccion: '',
      periodo_escolar: '',
      materia: ''
    },
    estudiantes: [
      {
        id: 0,
        nombre: 'Cargando',
        apellido: ' Registros',
        perimerLapso: 0,
        segundoLapso: 0,
        tercerLapso: 0,
        materia: 0
      }
    ]
  }

  const nombres = [
    'Estudiante', 'Primer Lapso', 'Segundo Lapso', 'Tercer Lapso', 'Total'
  ]

  const { grupoId, materiaId } = useParams()
  const history = useHistory()
  const [notas, setNotas] = useState(initialNotas)
  const [id, setId] = useState(0)
  const [materia, setMateria] = useState(0)

  useEffect(() => {
    getNotas(grupoId, materiaId).then(response => {
      toast.success('Se cargaron las notas de la evaluación')
      setNotas(response.data)
    })
  }, [])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-between">
      </div>
      <ModalNotas
        id={id}
        materia={materia}
        setRegistro={setNotas}
        changeId={setId}
        changeMateria={setMateria}
        grupoId={grupoId}
      />
      <div className="row ps-5">
        <TablaNotasEstudiante
          nombres={nombres}
          datas={notas.estudiantes}
          grupo={notas.grupo}
          changeId={setId}
          changeMateria={setMateria}
        />
        <div className="col-1">
          <button type="button" className="btn btn-danger" onClick={(event) => {
            event.preventDefault()
            history.push('/notas')
          }}>Atras</button>
        </div>
      </div>
    </div>
  )
}
export default NotasEstudiantes
