import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faSave, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { getAll, destroy } from '../../services/service'
import moment from 'moment'

const Backup = () => {
  const nombres = ['nombre del backup', 'fecha de creación', 'acción']

  const campos = ['name', 'date']

  const [datas, setDatas] = useState([{ name: '', data: '' }])

  const handleDelete = (event, name) => {
    event.preventDefault()
    destroy(name, 'backup/destroy')
    handleData()
  }

  const handleData = () => {
    getAll('backup')
      .then(response => response.data)
      .then(data => setDatas(data))
      .catch(() => setDatas([{}]))
  }

  const createBackup = () => {
    getAll('backup/create')
      .then(response => console.log(response.data))
    handleData()
  }

  useEffect(() => {
    handleData()
  }, [])

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-between">
        <div className="col-md-1 text-end">
          <button type="button" className="btn bg-gradient-info btn-block" onClick={createBackup} style={{ cursor: 'copy' }}>
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </button>
        </div>
        <div className="card my-5 mt-0">
          {(datas.length)
            ? <div className="table-responsive table-striped table-hover">
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
                                <div className="text-xs font-weight-bold text-center mb-0">{
                                  (typeof data[campo] === 'number')
                                    ? moment(data[campo]).format('Y-m-d hh:mm:ss')
                                    : data[campo]
                                }</div>
                              </td>)
                            })
                          }
                          <td className="align-middle w-25 text-center p-0">
                            <a href={'http://localhost:8000/api/backup/download/' + data.name} target="__blank" className="btn btn-icon btn-2 btn-warning my-1" type="button" data-toggle="tooltip" data-original-title="Edit user" data-bs-toggle="modal" data-bs-target="#staticBackdrop" rel="noreferrer" onClick={() => {
                              window.open('http://localhost:8000/api/backup/download/' + data.name, '__blank')
                              window.focus()
                            }}>
                              <span className="btn-inner--icon">
                                <FontAwesomeIcon icon={faSave} />
                              </span>
                            </a>
                            <button className="btn btn-icon btn-2 btn-danger mx-3 my-1" type="button"
                              onClick={(event) => { handleDelete(event, data.name) }}>
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
            : 'no hay respaldos de la base de datos'
          }        </div >
      </div>
    </div>
  )
}
export default Backup
