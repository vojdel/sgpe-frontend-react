import { useState, useEffect } from 'react'
import { getAll, destroy, search } from '../services/service.js'

export const useTabla = ({ tabla, init, error }) => {
  const initialPaginacion = {
    all: 0,
    next: null,
    prev: 1,
    first: 1,
    last: 1,
    allData: 0,
    skip: null
  }

  const [data, setData] = useState(init)
  const [paginacion, setPaginacion] = useState(initialPaginacion)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [id, setId] = useState(0)
  const [buscando, setBuscando] = useState(false)
  const [busqueda, setBusqueda] = useState('')

  const handleData = () => {
    window.document.body.style.cursor = 'progress'
    getAll(`${tabla}/pagination/page=${page}&limit=${limit}`)
      .then((response) => {
        return response.data
      }).then((data) => {
        console.log(data)
        if (data.meta.all !== 0) {
          setData(data.data)
          setPaginacion(data.meta)
        } else {
          setData(error)
          setPaginacion(initialPaginacion)
        }
        window.document.body.style.cursor = 'initial'
      })
      .catch(() => {
        setData(error)
        setPaginacion(initialPaginacion)
        window.document.body.style.cursor = 'initial'
      })
  }

  const handleDelete = (event, id) => {
    event.preventDefault()
    destroy(id, tabla).then(data => {
      console.log(data)
      handleData()
    })
  }

  const handlePaginacion = (event, pagina) => {
    event.preventDefault()
    setPage(pagina)
  }

  const handleId = (event, id) => {
    event.preventDefault()
    setId(id)
  }

  const handleChange = (event) => {
    event.preventDefault()
    setBusqueda(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    search(tabla, busqueda)
      .then(response => {
        console.log(response.data)
        return response.data
      }).then(data => {
        (data !== [] && data.length > 0) ? setData(data) : setData(error)
        setPaginacion(initialPaginacion)
      })
      .catch(() => {
        setData(error)
        setPaginacion(initialPaginacion)
      })
    setBuscando(true)
  }

  const handleButtonBack = (event) => {
    event.preventDefault()
    handleData()
    setBuscando(false)
  }

  const handleLimit = (event) => {
    setLimit(event.target.value)
  }

  const resetId = () => {
    setId(0)
  }

  useEffect(() => {
    handleData()
    setPaginacion(initialPaginacion)
  }, [])

  useEffect(() => {
    handleData()
  }, [page, limit])

  return {
    data,
    buscando,
    page,
    paginacion,
    busqueda,
    id,
    limit,
    handleId,
    handleDelete,
    handlePaginacion,
    handleChange,
    handleSearch,
    handleButtonBack,
    handleData,
    handleLimit,
    resetId
  }
}
