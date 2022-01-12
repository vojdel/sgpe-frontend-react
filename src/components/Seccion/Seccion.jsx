import FormSeccion from './FormSeccion'
import Tabla from '../layout/Tabla'
import Barra from '../layout/Barra'
import { useTabla } from '../../hooks/useTabla'

const Seccion = () => {
  const nombres = ['#', 'grado', 'seccion', 'action']

  const initialSeccion = [
    {
      id: 1,
      secciones: 'Cargando',
      grados: 'Registros'
    }
  ]

  const errorSeccion = [
    {
      id: 1,
      secciones: 'No existen ',
      grados: 'Registros'
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
  } = useTabla({ tabla: 'seccion', init: initialSeccion, error: errorSeccion })

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
          reporte={'seccion'}
        />
        <FormSeccion
          id={id}
          setRegistro={handleData}
          changeId={resetId}
        />
      </div>
      <Tabla
        nombres={nombres}
        datas={data}
        campos={['id', 'secciones', 'grados']}
        handleDelete={handleDelete}
        handleId={handleId}
        handlePaginacion={handlePaginacion}
        page={page}
        paginacion={paginacion}
      />
    </div>
  )
}
export default Seccion
