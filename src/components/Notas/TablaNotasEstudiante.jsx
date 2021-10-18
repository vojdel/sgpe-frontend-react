import PropTypes from 'prop-types'
import { Modal } from 'bootstrap'

const TablaNotasEstudiante = ({ nombres, datas, grupo, changeId, changeMateria }) => {
  /**
   * handleSetId.
   *
   * @param {string|number} id
   */
  const handleSetId = (id, materia) => {
    const modal = new Modal(document.getElementById('staticBackdrop'))
    modal.show()
    changeId(id)
    changeMateria(materia)
  }

  return (
    <div className="card my-5 mt-0">
      <div className="table-responsive">
        <table className="table algin-items-center mb-0">
          <thead>
            <tr className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              <td>Materia: {grupo.materia}</td>
              <td>Grado: {grupo.grado}</td>
              <td>Sección: {grupo.seccion}</td>
              <td>Periodo Escolar: {grupo.periodo_escolar}</td>
              <td>Maestro: {grupo.empleado}</td>
            </tr>
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
                  <tr key={index} onClick={() => handleSetId(data.id, data.materia)}>
                    <td>
                      <div className="text-xs font-weight-bold mb-0 text-center">{data.nombre} - {data.apellido}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0 text-center">{data.primerLapso || 0}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0 text-center">{data.segundoLapso || 0}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0 text-center">{data.tercerLapso || 0}</div>
                    </td>
                    <td>
                      <div className="text-xs font-weight-bold mb-0 text-center">
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
  grupo: PropTypes.object,
  changeId: PropTypes.func,
  changeMateria: PropTypes.func
}

export default TablaNotasEstudiante
