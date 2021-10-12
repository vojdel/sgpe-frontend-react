import PropTypes from 'prop-types'

const Form = ({ asistencia, errors, empleados, valido, id, handleChange, handleSubmit, clean }) => {
  return (
    <>
      <form role="form text-left">
        <div className="row">
          <div className="col-12 d-inline-block">
            <label className="form-label" htmlFor="empleado_id">Cedula</label>
            <div className="input-group mb-3">
              <select className="form-control" aria-label="emplaedo" id="empleado_id" aria-describedby="empleado-addon" name="empleado_id" onChange={handleChange} value={asistencia.empleado_id}>
                <option value="0">Seleccione un Empleado...</option>
                {
                  empleados.map((empleado, index) => {
                    return (<option value={empleado.id} key={index}>
                      {`${empleado.nombre} ${empleado.apellido}, ${empleado.cargo}`}
                    </option>)
                  })
                }
              </select>
              {errors.empleado_id ? <div className="invalid-feedback">{errors.empleado_id}</div> : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Fecha:</label>
            <div className="input-group mb-3">
              <input type="date" className="form-control" placeholder="Escribe el states aqui..." aria-label="Estado" aria-describedby="states-addon" name="fecha" onChange={handleChange} value={asistencia.fecha} disabled={(id === 0)} />
            </div>
            {errors.fecha ? <div className="text-danger">{errors.fecha}</div> : null}
          </div>
        </div>
        <div className="row">
          <label htmlFor="asistio">Asitio: </label>
          <div className="input-group mb-3">
            <select name="asistio" id="asistio" onChange={handleChange} value={(asistencia.asistio === true) ? 0 : 1} className="form-control" >
              <option value="0">Si</option>
              <option value="1">No</option>
            </select>
          </div>
          {errors.asistio ? <div className="text-danger">{errors.asistio}</div> : null}
        </div>
        <div className="row">
          <div className="col">
            <label>Motivo:</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Escribe el states aqui..." aria-label="Estado" aria-describedby="states-addon" name="motivo" value={asistencia.motivo} onChange={handleChange} />
            </div>
            {errors.motivo ? <div className="text-danger">{errors.motivo}</div> : null}
          </div>
        </div>
      </form>
      <div className="modal-footer">
        <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={clean}>Close</button>
        {(valido)
          ? <button type="submit" className="btn bg-gradient-info" onClick={handleSubmit}>
            {(id === 0) ? 'Registrar' : 'Editar'}
          </button>
          : <button type="button" className="btn bg-gradient-info" disabled>
            {(id === 0) ? 'Registrar' : 'Editar'}
          </button>
        }
      </div>
    </>
  )
}

Form.propTypes = {
  asistencia: PropTypes.object,
  errors: PropTypes.object,
  empleados: PropTypes.array,
  valido: PropTypes.bool,
  id: PropTypes.number,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  clean: PropTypes.func
}

export default Form
