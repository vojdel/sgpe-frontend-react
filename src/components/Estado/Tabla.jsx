import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { getAll, destroy } from '../../services/service.js'

const Tabla = ({ nombres, datas, changeRegistro, changeId }) => {
  const handleDelete = (event, id) => {
    event.preventDefault()
    destroy(id, 'estado').then(data => {
      console.log(data)
      getAll('estado').then(response => {
        changeRegistro(response.data)
      })
    })
  }
  return (
    <div className="card my-5 mt-0">
      <div className="table-responsive">
        <table className="table algin-items-center mb-0">
          <thead>
            <tr>
              {nombres.map((n) => {
                return (
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" key="index" >{n}</th>
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
                      <div className="text-xs font-weight-bold mb-0">{data.states}</div>
                    </td>
                    <td className="align-middle w-25 text-center">
                      <button className="btn btn-icon btn-2 btn-warning" type="button" data-toggle="tooltip" data-original-title="Edit user" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => changeId(data.id)}>
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

Tabla.propTypes = {
  nombres: PropTypes.array,
  datas: PropTypes.array,
  changeRegistro: PropTypes.func,
  changeId: PropTypes.func
}

export default Tabla
