import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Tabla = ({ nombres, datas, campos, handleDelete, handleId, handlePaginacion, page, paginacion }) => {
  const paginacionPage = () => {
    const result = []
    for (let i = 1; i <= paginacion.last; i++) {
      result.push(<li className={(page === i) ? 'page-item active' : 'page-item'}>
        <a className="page-link" onClick={(event) => {
          handlePaginacion(event, i)
        }}>{i}</a>
      </li>)
    }
    return result
  }

  return (
    <div className="row ps-5">
      <div className="card my-5 mt-0">
        <div className="table-responsive table-striped table-hover">
          <table className="table algin-items-center mb-0">
            <thead>
              <tr>
                {nombres.map((nombre, index) => {
                  return (
                    <th className="text-center text-uppercase text-xxs font-weight-bolder" key={ index }>{nombre}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {
                datas.map((data, index) => {
                  return (
                    <tr key={index} style={{ borderWidth: '1px 0px' }}>
                      {
                        campos.map((campo, index) => {
                          return (<td key={index}>
                            <div className="text-xs font-weight-bold text-center mb-0">{data[campo]}</div>
                          </td>)
                        })
                      }
                      <td className="align-middle w-25 text-center p-0">
                        <button className="btn btn-icon btn-2 btn-warning my-1" type="button" data-toggle="tooltip" data-original-title="Edit user" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={(event) => {
                          handleId(event, data.id)
                        }}>
                          <span className="btn-inner--icon">
                            <FontAwesomeIcon icon={faPenAlt} />
                          </span>
                        </button>
                        <button className="btn btn-icon btn-2 btn-danger mx-3 my-1" type="button"
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
          <span className="text-end text-secondary text-sm w-100 d-inline-block my-3 px-3">
            registro [{paginacion.skip + 1} - {paginacion.allData + paginacion.skip}],
            vista {paginacion.allData}, total {paginacion.all}
          </span>
        </div>
      </div >
      {(paginacion.allData < paginacion.all)
        ? <nav aria-label="Page navigation example" style={{ cursor: 'pointer' }}>
          <ul className="pagination justify-content-center">
            <li className={(page === 1) ? 'page-item disabled' : 'page-item'}>
              <a className="page-link" tabIndex="-1"
                aria-disabled={(page === 1)}
                onClick={(event) => {
                  handlePaginacion(event, paginacion.first)
                }}>First</a>
            </li>
            <li className={(page === 1) ? 'page-item disabled' : 'page-item'}>
              <a className="page-link"
                aria-disabled={(page === 1)}
                aria-label="Previous"
                onClick={(event) => {
                  handlePaginacion(event, paginacion.prev)
                }}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {
              paginacionPage().map(pages => pages)
            }
            <li className={(page === paginacion.last) ? 'page-item disabled' : 'page-item'}>
              <a className="page-link"
                aria-disabled={(paginacion.next === paginacion.last)}
                aria-label="Next"
                onClick={(event) => {
                  handlePaginacion(event, paginacion.next)
                }}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
            <li className={(page === paginacion.last) ? 'page-item disabled' : 'page-item'}
              aria-disabled={(paginacion.last === page)}
              onClick={(event) => {
                handlePaginacion(event, paginacion.last)
              }}>
              <a className="page-link">Last</a>
            </li>
          </ul>
        </nav>
        : null
      }
    </div >
  )
}

Tabla.propTypes = {
  nombres: PropTypes.array,
  datas: PropTypes.array,
  campos: PropTypes.array,
  handleId: PropTypes.func,
  handleDelete: PropTypes.func,
  handlePaginacion: PropTypes.func,
  paginacion: PropTypes.object,
  page: PropTypes.number
}

export default Tabla
