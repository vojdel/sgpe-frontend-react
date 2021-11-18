import { meUser } from '../services/login'
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [username, setUserName] = useState('')

  useEffect(() => {
    if (window.localStorage.getItem('loggedUser')) {
      meUser().then(data => {
        setUserName(data.empleado[0].nombre)
        console.log(data)
      }).catch(error => {
        console.log({ error })
        window.localStorage.removeItem('loggedUser')
      })
    }
  }, [])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-center bg-white border-radius-lg d-flex align-items-center me-2" style={{ height: '600px' }}>
        <div className="col-md-10">
          <h1 className="text-center text-primary font-weight-bolder" style={{ fontFamily: 'Noto Sans' }}> Bienvenido {username} a esta Aplicación</h1>
        </div>
      </div>
      { /*
<div className="row my-3 ps-5 justify-content-center bg-white border-radius-lg d-flex me-2">
        <div className="col-md-10 ">
          <h1 className="text-center text-primary">Maestros</h1>
        </div>
      </div>
      <div className="row my-3 ps-5 justify-content-center bg-white border-radius-lg d-flex me-2">
        <div className="col-2">
          <button className="btn btn-danger mt-2 p-3 mt-2 p-3">
            <Link to="/estudiante" className="text-center  text-white">Estudiante</Link>
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-warning mt-2 p-3">
            <Link to="/representante" className="text-center  text-white">Representante</Link>
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-info mt-2 p-3">
            <Link to="/personal" className="text-center  text-white">Personal</Link>
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-success mt-2 p-3">
            <Link to="/periodoescolar" className="text-center  text-white">Periodo Escolar</Link>
          </button>
        </div>
      </div>
      <div className="row my-3 ps-5 justify-content-center bg-white border-radius-lg d-flex me-2">
        <div className="col-2">
          <button className="btn btn-primary mt-2 p-3">
            <Link to="/grado" className="text-center  text-white">Grado</Link>
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-info mt-2 p-3">
            <Link to="/seccion" className="text-center  text-white">Sección</Link>
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-danger mt-2 p-3">
            <Link to="/ocupacionlaboral" className="text-center  text-white">Ocupación Laboral</Link>
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-success mt-2 p-3">
            <Link to="/materia" className="text-center  text-white">Materia</Link>
          </button>
        </div>
      </div>
      <div className="row my-3 ps-5 justify-content-center bg-white border-radius-lg d-flex me-2">
        <div className="col-md-10">
          <h1 className="text-center text-primary">Procesos</h1>
        </div>
      </div>
    <div className="row my-3 ps-5 justify-content-center bg-white border-radius-lg d-flex me-2">
        <div className="col-2">
          <button className="btn btn-danger mt-2 p-3">
            <Link to="/inscripcion" className="text-center  text-white">Inscripción</Link>
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-info mt-2 p-3">
            <Link to="/asistencia" className="text-center  text-white">Asistencia</Link>
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-warning mt-2 p-3">
            <Link to="/notas" className="text-center  text-white">Notas</Link>
          </button>
        </div>
      </div>
      */ }
    </div>
  )
}
export default Home
