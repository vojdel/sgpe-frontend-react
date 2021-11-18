import Form from './Form'
import Tabla from '../layout/Tabla'
import Barra from '../layout/Barra'
import { useTabla } from '../../hooks/useTabla'

const Estado = () => {
  const nombres = ['#', 'estado', 'action']

  const initialEstados = [
    {
      id: '',
      states: 'Cargando Registros'
    }
  ]

  const errorEstados = [
    {
      id: 0,
      nombre: 'No Existen Registros'
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
  } = useTabla({ tabla: 'estado', init: initialEstados, error: errorEstados })

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
        <Form
          id={id}
          setRegistro={handleData}
          changeId={resetId}
        />
      </div>
      <Tabla
        nombres={nombres}
        datas={data}
        campos={['id', 'states']}
        handleDelete={handleDelete}
        handleId={handleId}
        handlePaginacion={handlePaginacion}
        page={page}
        paginacion={paginacion}
      />
    </div>
  )
}
export default Estado
