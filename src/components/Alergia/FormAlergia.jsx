import { Formik, Form, Field } from 'formik'
import { AlergiaSchema } from './AlergiaSchema'
import PropTypes from 'prop-types'

/**
  * Formulario de Alergia
  * @params {{initial: {id: number, alergia: string, tipo_alergias: number, descripcion: string}, submit: Function, sections: [{id: number, tipo_alergias: string}, tipoModal: boolean]}}
  * @returs {React.Component} Componente del Formulario
  * */
const FormAlergia = ({ initial, submit, sections, tipoModal }) => {
  /* @type {string} */
  const notError = ''

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Estado</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Formik
              initialValues={initial}
              validationSchema={AlergiaSchema}
              onSubmit={values => {
                // same shape as initial values
                submit(values)
                console.log({ values })
              }}
            >
              {({ errors, touched, handleChange, handleBlur, handleSubmit, handleReset, isValid }) => (
                <Form onSubmit={handleSubmit}
                  className="form text-left">
                  <div className="form-group mb-1">
                    <label>Alergia</label>
                    <Field name="alergia" onChange={handleChange} onBlur={handleBlur}
                      className={`form-control ${(errors.alergia && touched.alergia) ? 'is-invalid' : 'is-valid'}`}
                    />
                    {errors.alergia && touched.alergia
                      ? (
                        <small className="text-danger">{errors.alergia}</small>
                        )
                      : notError}
                  </div>
                  <div className="form-group mb-1">
                    <label>Tipo de Alergia</label>
                    <Field as="select"
                      name="tipo_alergias"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${(errors.tipo_alergias && touched.tipo_alergias) ? 'is-invalid' : 'is-valid'}`}
                    >
                      <option value="0">
                        {(sections.length === 0) ? 'Registre un tipo de alergia' : 'Seleccione...'}
                      </option>
                      {
                        sections.map((sec, index) => (<option value={sec.id} key={index}>{sec.tipo_alergias}</option>))
                      }
                    </Field>
                    {errors.tipo_alergias && touched.tipo_alergias
                      ? (<small className="text-danger">{errors.tipo_alergias}</small>)
                      : notError}
                  </div>
                  <div className="form-group mb-1">
                    <label>Descripción</label>
                    <Field name="descripcion" type="descripcion" onChange={handleChange} onBlur={handleBlur}
                      className={`form-control ${(errors.descripcion && touched.tipo_alergias) ? 'is-invalid' : 'is-valid'}`}
                    />
                    {errors.descripcion && touched.descripcion ? <small className="text-danger">{errors.descripcion}</small> : notError}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal" onClick={handleReset}>Close</button>
                    <button type="submit"
                      className="btn bg-gradient-info"
                      disabled={!isValid}>
                      {(tipoModal) ? 'Registrar' : 'Modificar'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

FormAlergia.propTypes = {
  initial: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  sections: PropTypes.array.isRequired,
  tipoModal: PropTypes.bool.isRequired
}

export default FormAlergia
