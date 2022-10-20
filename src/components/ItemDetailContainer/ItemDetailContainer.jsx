import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loading } from '../Loading/Loading'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firestore/firestore'

export const ItemDetailContainer = () => {
  const { id } = useParams()

  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)

  //Muestra los detalles de un libro trayendolo desde firebase usando como parametro de busqueda su ids

  const getBook = async (idItem) => {
    try {
        setLoading(true)
        const document = doc(db, "Books", idItem)
        const response = await getDoc(document)
        const result = { id: response.id, ...response.data() }
        setDetails(result)
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    getBook(id)
  }, [id])

  return (
    loading ? <Loading/> : <ItemDetail name={details.name} autor={details.autor} stock={details.stock} sinopsis={details.synopsis} img={details.img} editorial={details.editorial} price={details.price} id={details.id}/>
  )
}
