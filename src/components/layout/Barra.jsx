import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Barra = ({ buscando, busqueda, limit, handleChange, handleSearch, handleButtonBack, handleLimit }) => {
  return (
    <>
      {(buscando)
        ? <div className="col-md-1 col-12">
          <button type="button" className="btn btn-warning" onClick={handleButtonBack}>
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
          </button>
        </div>
        : null
      }
      <div
        className={(buscando)
          ? 'col-md-8 bg-white border-radius-lg d-flex me-2'
          : 'col-md-9 bg-white border-radius-lg d-flex me-2'}>
        <input type="text" className="form-control border-0 ps-3" placeholder="Type here..." value={busqueda} onChange={handleChange} />
        <button className="btn bg-gradient-primary my-1 me-1" onClick={handleSearch}>Search</button>
      </div>
      <div className="col-md-1 col-12">
        <select className="form-select" value={limit} onChange={handleLimit}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="col-md-1 text-end">
        <button type="button" className="btn bg-gradient-info btn-block" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ cursor: 'copy' }}>
          <FontAwesomeIcon icon={faPlus} className="text-white" />
        </button>
      </div>
    </>
  )
}

Barra.propTypes = {
  buscando: PropTypes.bool.isRequired,
  busqueda: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleLimit: PropTypes.func.isRequired,
  handleButtonBack: PropTypes.func.isRequired
}

export default Barra
