import { useState } from 'react'

/**
 * FormRepresentante.
 * @returns Modal de Representante
 */
const FormRepresentante = () => {
  const initialRepresentante = {
    id: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    sex: 'Masculino',
    telefono: '',
    direccion: '',
    municipality: 0,
    ocupacion_laboral: 0
  }

  const [representante, setRepresentante] = useState(initialRepresentante)

  /**
    * Manejar input estado
    * @param {any} event
    * */
  const handleChange = (event) => {
    setRepresentante({
      ...representante,
      [event.target.name]: event.target.value
    })
    console.log({ representante })
  }

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="row justify-content-between w-100">
              <div className="col-10">
                <h3 className="modal-title font-weight-bolder text-info text-gradient" id="staticBackdropLabel">Representante</h3>
              </div>
              <div className="col-2 text-end">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <form role="form text-left">
              <div className="row">
                <div className="col-md-6 col-12 d-inline-block">
                  <label>Cedula</label>
                  <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="1.234.567" aria-label="Cedula" aria-describedby="cedula-addon" onChange={handleChange} name="cedula" value={representante.cedula} />
                  </div>
                </div>
                <div className="col-md-6 col-12 d-inline-block">
                  <label>Sexo</label>
                  <div className="input-group mb-3">
                    <select className="form-control" aria-label="Sexo" aria-describedby="sexo-addon" onChange={handleChange} name="sex" value={representante.sexo} >
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>
                </div>
              </div>
              <label>Nombre(s)</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el nombre aqui..." aria-label="Nombre" aria-describedby="nombre-addon" onChange={handleChange} name="nombre" value={representante.nombre} />
              </div>
              <label>Apellido(s)</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el apellido aqui..." aria-label="Apellido" aria-describedby="estado-addon" onChange={handleChange} name="apellido" value={representante.apellido} />
              </div>
              <label>Telefono</label>
              <div className="input-group mb-3">
                <input type="number" className="form-control" placeholder="Escribe el Telefono aqui..." aria-label="Telefono" aria-describedby="telefono-addon" onChange={handleChange} name="telefono" value={representante.telefono} />
              </div>
              <div className="row">
                <div className="col-md-6 col-12 d-inline-block">
                  <label>Estado</label>
                  <div className="input-group mb-3">
                    <select className="form-control" aria-label="Estado" aria-describedby="estado-addon" name="sex" >
                      <option value="0">Seleccione...</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-12 d-inline-block">
                  <label>Municipio</label>
                  <div className="input-group mb-3">
                    <select className="form-control" aria-label="Municipio" aria-describedby="municipality-addon" onChange={handleChange} name="municipality" value={representante.municipality} >
                      <option value="0">Seleccione...</option>
                      <option value="1">Yaracuy</option>
                    </select>
                  </div>
                </div>
              </div>
              <label>Dirección</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe la dirección aqui..." aria-label="Direccion" aria-describedby="direccion-addon" onChange={handleChange} name="direccion" value={representante.direccion} />
              </div>
    <div className="row">
              <div className="col-md-6 col-12 d-inline-block">
                <label>fecha de nacimiento</label>
                <div className="input-group mb-3">
                  <input type="date" className="form-control" aria-label="Facha de nacimiento" aria-describedby="fecha_nacimiento-addon" onChange={handleChange} name="fecha_nacimiento" value={representante.fecha_nacimiento} />
                </div>
              </div>
              <div className="col-md-6 col-12 d-inline-block">
                <label>Ocupacion Laboral</label>
                <div className="input-group mb-3">
                  <select className="form-control" aria-label="Ocupacion Laboral" aria-describedby="ocupacion_laboral-addon" onChange={handleChange} name="ocupacion_laboral" value={representante.ocupacion_laboral} >
                    <option value="0">Seleccione...</option>
                    <option value="1">Trabajador Aburrido</option>
                  </select>
                </div>
              </div>
    </div>
              <label>Lugar de Nacimiento</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe el Lugar de nacimiento aqui..." aria-label="Lugar de Nacimiento" aria-describedby="lugar_nacimiento-addon" onChange={handleChange} name="lugar_nacimiento" value={representante.lugar_nacimiento} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn bg-gradient-warning" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn bg-gradient-info" >Registrar</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
export default FormRepresentante
