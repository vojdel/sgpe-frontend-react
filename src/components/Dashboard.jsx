import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

const Dashboard = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    setData({
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [{
        label: '# de Asistencias',
        data: ['10', '20', '30', '15', '7', '25', '17', '19', '9', '11', '22', '28'],
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1
      }, {
        label: '# de Inasistencias',
        data: ['14', '21', '20', '13', '6', '15', '27', '29', '8', '21', '32', '18'],
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1
      }]
    })
  }, [])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="card row m-3 ps-5 justify-content-between">
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
  )
}

export default Dashboard
