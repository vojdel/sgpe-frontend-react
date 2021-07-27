import { useState } from 'react'

/**
 * FormSeccion.
 * @returns Modal de Seccion
 */
const FormSeccion = () => {
  const initialSeccion = {
    id: 0,
    seccion: ''
  }

  const [seccion, setSeccion] = useState(initialSeccion)

  /**
    * Manejar input seccion
    * @param {any} event
    * */
  const handleSeccion = (event) => {
    setSeccion({
      ...seccion,
      seccion: event.target.value
    })
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Seccion</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <label>Seccion</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el seccion aqui..." aria-label="Seccion" aria-describedby="seccion-addon" onChange={handleSeccion} value={seccion.seccion} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn bg-gradient-info">Registrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FormSeccion
