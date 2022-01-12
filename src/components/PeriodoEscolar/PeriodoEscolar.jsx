import Form from './Form'
import Tabla from '../layout/Tabla'
import Barra from '../layout/Barra'
import { useTabla } from '../../hooks/useTabla'

const PeriodoEscolar = () => {
  const nombres = ['id', 'Inicio de Año', 'Fin de Año', 'action']

  const initialPriodoEscolar = [{
    id: 0,
    anio_ini: 'Cargando',
    anio_fin: 'Registros'
  }]

  const errorPriodoEscolar = [{
    id: 0,
    anio_ini: 'Cargando',
    anio_fin: 'Registros'
  }]

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
  } = useTabla({ tabla: 'periodoescolar', init: initialPriodoEscolar, error: errorPriodoEscolar })

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
          reporte={'periodoescolar'}
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
        campos={['id', 'anio_ini', 'anio_fin']}
        handleDelete={handleDelete}
        handleId={handleId}
        handlePaginacion={handlePaginacion}
        page={page}
        paginacion={paginacion}
      />
    </div>
  )
}
export default PeriodoEscolar
