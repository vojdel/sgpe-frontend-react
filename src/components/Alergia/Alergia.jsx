import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FormAlergia from './FormAlergia'
import TablaAlergia from './TablaAlergia'
import { useState, useEffect } from 'react'

const Alergia = () => {
  const [alergias, setAlergias] = useState([])
  /**
    * @type {any}
    * */
  const [newAlergia, setNewAlergia] = useState({
    id: 0,
    alergia: '',
    tipo_alergias: 0,
    descripcion: ''
  })

  const [tipoModal, setTipoModal] = useState(true)

  const nombres = ['id', 'tipo de alergia', 'alergia', 'action']

  const sections = [
    {
      id: 1,
      tipo_alergias: 'Refriado'
    }
  ]

  useEffect(() => {
    setAlergias([
      {
        id: 1,
        alergia: 'Refriado',
        tipo_alergias: 1
      },
      {
        id: 1,
        alergia: 'Refriado',
        tipo_alergias: 1
      },
      {
        id: 1,
        alergia: 'Refriado',
        tipo_alergias: 1
      },
      {
        id: 1,
        alergia: 'Refriado',
        tipo_alergias: 1
      },
      {
        id: 1,
        alergia: 'Refriado',
        tipo_alergias: 1
      }
    ])
  }, [])

  /**
   * @type {any}
   * @param {object} values
   * @returns {void}
   */
  const create = (values) => {
    setAlergias([...alergias, values])
    setTipoModal(true)
  }

  /*
    * @param {number} id
    * @returns {void}
    * */
  const deleteAlergia = (id) => {
    setAlergias(alergias.filter(alergia => alergia.id !== id))
  }
  /**
   * @param {{id:number, alergia: string, tipo_alergias: number, descripcion: string}} val
   * @returns {void}
    */
  const editar = (val) => {
    setNewAlergia({
      id: val.id,
      alergia: val.alergia,
      tipo_alergias: val.tipo_alergias,
      descripcion: val.descripcion
    })
    setTipoModal(false)
  }

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-between">
        <div className="col-md-10 bg-white border-radius-lg d-flex me-2">
          <input type="text" className="form-control border-0 ps-3" placeholder="Type here..." />
          <button className="btn bg-gradient-primary my-1 me-1">Search</button>
        </div>
        <div className="col-md-1 text-end">
          <button type="button" className="btn bg-gradient-info btn-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </button>
        </div>
        <FormAlergia
          initial={newAlergia}
          submit={create}
          sections={sections}
          tipoModal={tipoModal}
        />
      </div>
      <div className="row ps-5">
        <TablaAlergia
          nombres={nombres}
          datas={alergias}
          editar={editar}
          eliminar={deleteAlergia}
        />
      </div>
    </div>
  )
}
export default Alergia
