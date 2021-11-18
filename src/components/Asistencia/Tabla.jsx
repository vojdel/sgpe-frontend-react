import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Tabla = ({ datas, handleDelete, setId }) => {
  return (
      <div className="table-responsive">
        <table className="table algin-items-center mb-0">
          <thead>
            <tr>
              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">id</th>
              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">empleado</th>
              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">asistio</th>
              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">fecha</th>
              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">acción</th>
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
                      <div className="text-xs font-weight-bold mb-0">{data.nombre} {data.apellido}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">{(data.asistio === true) ? 'si' : 'no'}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">{data.fecha}</div>
                    </td>
                    <td className="align-middle w-25 text-center">
                      <button className="btn btn-icon btn-2 btn-warning" type="button" onClick={(event) => {
                        event.preventDefault()
                        setId(data.id)
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
  )
}

Tabla.propTypes = {
  datas: PropTypes.array,
  handleDelete: PropTypes.func,
  setId: PropTypes.func
}

export default Tabla
