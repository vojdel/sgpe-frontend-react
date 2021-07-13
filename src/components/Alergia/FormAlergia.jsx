import { useFormik } from 'formik'
import AlergiaSchema from './AlergiaScheme'
import PropTypes from 'prop-types'

const FormAlergia = ({ initial, submit, sections }) => {
  const formik = useFormik({
    initialValues: initial,
    validationSchema: AlergiaSchema,
    onSubmit: values => submit(values)
  })

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Alergia</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={formik.handleReset}></button>
          </div>
          <div className="modal-body">
            <form role="form text-left" onSubmit={formik.handleSubmit}>
              <label>Tipo de Alergias</label>
              <div className="input-group mb-3">
                <select className="form-control" value={formik.values.tipo_alergias} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                  <option value="0">{(sections.length > 0) ? 'Registre tipo de Alergia' : 'Seleccione...'}</option>
                  {
                    sections.map((sec, index) => {
                      return (<option key={index} value={sec.id}>{sec.tipo_alergias}</option>)
                    })
                  }
                </select>
                <span>{formik.error.tipo_alergias}</span>
              </div>
              <label>Alergia</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe la alergia aqui..." aria-label="alergia" aria-describedby="alergia-addon" onChange={formik.onChange} value={formik.values.alergias} onBlur={formik.handleBlur} />
                <span>{formik.error.alergia}</span>
              </div>
              <div className="input-group">
                <span className="input-group-text">Descripción</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
              </div>
            </form>
            <textarea id="" cols="30" rows="10" value={formik.values.descripcion}></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={formik.handleReset}>Close</button>
            <button type="button" className="btn bg-gradient-info">Registrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

FormAlergia.propTypes = {
  initial: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  sections: PropTypes.array.isRequired
}

export default FormAlergia
