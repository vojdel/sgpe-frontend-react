import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import { getAll, graficoAnio } from '../services/service'

const Dashboard = () => {
  const [data, setData] = useState({})
  const [numeros, setNumeros] = useState({
    inscripciones: 0,
    asistencia: 0,
    inasistencia: 0,
    usuarios: 0
  })

  const handleDataAnio = () => {
    const anio = moment().format('Y')
    getAll('dashboard/data')
      .then(response => setNumeros(response.data))
    graficoAnio(`dashboard/asistencia/anio/anio=${anio}&id=${0}`, {
      anio: [
        { ini: '01-01-' + anio, fin: '31-01-' + anio },
        { ini: '01-02-' + anio, fin: '28-02-' + anio },
        { ini: '01-03-' + anio, fin: '31-03-' + anio },
        { ini: '01-04-' + anio, fin: '30-04-' + anio },
        { ini: '01-05-' + anio, fin: '31-05-' + anio },
        { ini: '01-06-' + anio, fin: '30-06-' + anio },
        { ini: '01-07-' + anio, fin: '31-07-' + anio },
        { ini: '01-08-' + anio, fin: '31-08-' + anio },
        { ini: '01-09-' + anio, fin: '30-09-' + anio },
        { ini: '01-10-' + anio, fin: '31-10-' + anio },
        { ini: '01-11-' + anio, fin: '30-11-' + anio },
        { ini: '01-12-' + anio, fin: '31-12-' + anio }
      ]
    })
      .then(response => setData(response.data))
  }

  useEffect(() => {
    // setData({
    // labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    // datasets: [{
    // label: '# de Asistencias',
    // data: ['10', '20', '30', '15', '7', '25', '17', '19', '9', '11', '22', '28'],
    // backgroundColor: 'blue',
    // borderColor: 'blue',
    // borderWidth: 1
    // }, {
    // label: '# de Inasistencias',
    // data: ['14', '21', '20', '13', '6', '15', '27', '29', '8', '21', '32', '18'],
    // backgroundColor: 'red',
    // borderColor: 'red',
    // borderWidth: 1
    // }]
    // })
    handleDataAnio()
  }, [])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row m-3 ps-5 d-flex justify-content-between">
        <div className="col-4 card my-3 ps-5 d-flex align-item-center">
          <h3>Inscripcones</h3>
          <span>{numeros.inscripciones}</span>
        </div>
        <div className="col-4 card my-3 ps-5 d-flex align-item-center">
          <h3>Asistencias</h3>
          <span>{numeros.asistencia} A | {numeros.inasistencia} I</span>
        </div>
        <div className="col-4 card my-3 ps-5 d-flex align-item-center">
          <h3>Usuarios</h3>
          <span>{numeros.usuarios}</span>
        </div>
        <div className="card my-5 ps-5">
          <Line
            data={data}
            width={70}
            height={30}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
