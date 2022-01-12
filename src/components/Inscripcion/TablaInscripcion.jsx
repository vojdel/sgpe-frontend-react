import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { getAll, destroy } from '../../services/service.js'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'

const TablaInscripcion = ({ nombres, datas, changeRegistro }) => {
  const history = useHistory()

  const handleDelete = (event, id) => {
    event.preventDefault()
    destroy(id, 'inscripcion').then(data => {
      toast.success('Se elimino la inscripción')
      getAll('inscripcion').then(response => {
        changeRegistro(response.data)
      })
    })
  }

  const setId = (event, id) => {
    event.preventDefault()
    window.localStorage.setItem('inscripcion_id', id)
    history.push('/inscripcion/form')
  }
  return (
    <div className="card my-5 mt-0">
      <div className="table-responsive">
        <table className="table algin-items-center mb-0">
          <thead>
            <tr>
              {nombres.map((nombre, index) => {
                return (
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" key={index} >{nombre}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {
              datas.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="text-xs font-weight-bold mb-0 text-center">{data.id}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">{data.cedula}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">{data.nombre}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">{data.grado}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">{data.seccion}</div>
                    </td>
                    <td className="align-middle w-25 text-center">
                      <button className="btn btn-icon btn-2 btn-warning" type="button" data-toggle="tooltip" data-original-title="Edit user" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(event) => {
                        setId(event, data.id)
                      }}>
                        <span className="btn-inner--icon">
                          <FontAwesomeIcon icon={faPenAlt} />
                        </span>
                      </button>
                      <button className="btn btn-icon btn-2 btn-danger mx-3" type="button"
                        onClick={(event) => { handleDelete(event, data.id) }}>
                        <span className="btn-inner--icon">
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </span>
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div >
  )
}
TablaInscripcion.propTypes = {
  nombres: PropTypes.array,
  datas: PropTypes.array,
  changeRegistro: PropTypes.func
}

export default TablaInscripcion
