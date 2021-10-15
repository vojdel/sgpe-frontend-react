import PropTypes from 'prop-types'
import { Modal } from 'bootstrap'

const TablaNotasEstudiante = ({ nombres, datas, changeId }) => {
  /**
   * handleSetId.
   *
   * @param {any} event
   * @param {string|number} id
   */
  const handleSetId = (id) => {
    const modal = new Modal(document.getElementById('staticBackdrop'))
    modal.show()
    changeId(id)
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
                  <tr key={index} onClick={() => handleSetId(data.id)}>
                    <td>
                      <div className="text-xs font-weight-bold mb-0 text-center">{data.nombre} - {data.apellido}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">{data.primerLapso || 0}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">{data.segundoLapso || 0}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">{data.tercerLapso || 0}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0">
                        {(parseInt(data.primerLapso || 0) + parseInt(data.segundoLapso || 0) + parseInt(data.tercerLapso || 0))}
                      </div>
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

TablaNotasEstudiante.propTypes = {
  nombres: PropTypes.array,
  datas: PropTypes.array,
  changeId: PropTypes.func
}

export default TablaNotasEstudiante
