import FormRepresentante from './FormRepresentante'
import Tabla from '../layout/Tabla'
import Barra from '../layout/Barra'
import { useTabla } from '../../hooks/useTabla'

const Representante = () => {
  const nombres = ['#', 'representante', 'action']

  const initialRepresentante = [
    {
      id: 0,
      nombre: 'Cargando Registros'
    }
  ]

  const errorRepresentante = [
    {
      id: 0,
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
  } = useTabla({ tabla: 'representante', init: initialRepresentante, error: errorRepresentante })

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
          reporte={'representante'}
        />
        <FormRepresentante
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
export default Representante
