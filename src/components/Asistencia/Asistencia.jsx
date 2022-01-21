import 'react-datetime/css/react-datetime.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useRef, useState } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ModalAsistencia from './ModalAsistencia'
import { getAll } from '../../services/asistencia.js'
import { Modal } from 'bootstrap'
import { URL_API } from '../../util/config'

const Asistencia = () => {
  const [event, setEvent] = useState([])
  const [fecha, setFecha] = useState(null)
  const [tipo, setTipo] = useState('form')
  const calendarRef = useRef(null)

  /**
   * handleDateClick.
   *
   * @param {any} arg
   */
  const handleDateClick = (arg) => {
    setFecha(arg.dateStr)
    const modal = new Modal(document.getElementById('staticBackdrop'))
    modal.show()
    console.log(arg.dateStr)
  }

  const calendarToday = () => {
    let calendarApi = null
    calendarApi = calendarRef.current.getApi()
    calendarApi.today()
  }

  // const addEvents = events => {
  // let calendarApi = null
  // calendarApi = calendarRef.current.getApi()
  // calendarApi.addEvent(events)
  // console.log(calendarApi)
  // }

  const handleDatesSet = (date) => {
    const end = parseInt(moment(date.startStr).add(1, 'month').endOf('month').format('DD'))
    const mes = moment(date.startStr).add(1, 'month').format('MM')
    const year = (parseInt(moment(date.start).add(1, 'month').format('YYYY')))
    getAll(
      '01',
      end,
      mes,
      year
    ).then(response => {
      setEvent(response.data)
    })
  }

  const handleEventAdd = (data) => {
    console.log(data.event)
  }

  // useEffect(() => {
  // console.log(calendarRef)
  // console.log(event)
  // }, [calendarRef])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-end bg-white">
        <div className="col-md-3 text-end">
          <a href={URL_API + '/api/reporte/asistencia/anio=' + moment().get('year') + '&empleado=0'} className="btn btn-success mx-2">
            Exportar
          </a>
          <button type="button" className="btn bg-gradient-info btn-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </button>
        </div>
        <ModalAsistencia
          setRegistro={setEvent}
          fecha={fecha}
          setFecha={setFecha}
          tipo={tipo}
          setTipo={setTipo}
          calendarToday={calendarToday}
        />
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={event}
          dateClick={handleDateClick}
          eventAdd={(event) => handleEventAdd(event)}
          datesSet={(date) => handleDatesSet(date)}
        />
      </div>
    </div>
  )
}
export default Asistencia
