import FormUsuario from './FormUsuario'
import Tabla from '../layout/Tabla'
import Barra from '../layout/Barra'
import { useTabla } from '../../hooks/useTabla'

const Usuario = () => {
  const nombres = ['#', 'usuario', 'action']

  const initialUsuario = [
    {
      id: 1,
      nombre: 'Cargando Registros'
    }
  ]

  const errorUsuario = [
    {
      id: 1,
      nombre: 'No existen Registros'
    }
  ]

  const {
    data,
    page,
    buscando,
    paginacion,
    id,
    busqueda,
    limit,
    handlePaginacion,
    handleDelete,
    handleId,
    handleChange,
    handleSearch,
    handleButtonBack,
    handleData,
    handleLimit,
    resetId
  } = useTabla({ tabla: 'usuario', init: initialUsuario, error: errorUsuario })

  return (
    <div className="row w-100 justify-content-md-center">
      <div className="row my-3 ps-5 justify-content-between">
        <Barra
          buscando={buscando}
          busqueda={busqueda}
          limit={limit}
          handleChange={handleChange}
          handleSearch={handleSearch}
          handleButtonBack={handleButtonBack}
          handleLimit={handleLimit}
        />
        <FormUsuario
          id={id}
          setRegistro={handleData}
          changeId={resetId}
        />
      </div>
      <Tabla
        nombres={nombres}
        datas={data}
        campos={['id', 'nombre']}
        handleDelete={handleDelete}
        handleId={handleId}
        handlePaginacion={handlePaginacion}
        page={page}
        paginacion={paginacion}
      />
    </div>
  )
}
export default Usuario
