import FormGrado from './FormGrado'
import Tabla from '../layout/Tabla'
import Barra from '../layout/Barra'
import { useTabla } from '../../hooks/useTabla'

const Grado = () => {
  const nombres = ['id', 'grado', 'action']

  const initialGrado = [
    {
      id: 1,
      grados: 'Cargando Registros'
    }
  ]

  const errorGrado = [
    {
      id: 1,
      grados: 'No existen Registros'
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
  } = useTabla({ tabla: 'grado', init: initialGrado, error: errorGrado })

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
          reporte={'grado'}
        />
        <FormGrado
          id={id}
          setRegistro={handleData}
          changeId={resetId}
        />
      </div>
      <Tabla
        nombres={nombres}
        datas={data}
        campos={['id', 'grados']}
        handleDelete={handleDelete}
        handleId={handleId}
        handlePaginacion={handlePaginacion}
        page={page}
        paginacion={paginacion}
      />
    </div>
  )
}

export default Grado
