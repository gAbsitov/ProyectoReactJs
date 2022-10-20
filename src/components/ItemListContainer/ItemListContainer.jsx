import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'
import { useParams } from 'react-router-dom'
import { db } from '../../firestore/firestore'
import { collection, getDocs, query, where } from 'firebase/firestore'

export const ItemListContainer = (props) => {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const { generos } = useParams()

  //Verifica si se esta pidiendo un genero y si se pide llama solo los libros de ese genero de la db y sino los llama a todos

  const getBooks = async (genero) => {
    try {
      setLoading(true)
      const document = genero ? query(collection(db, "Books"), where("genre", "==", genero))
        : collection(db, "Books")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
      setBooks(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBooks(generos)
  }, [generos])

  return (
    loading ? <Loading /> : <div className='item-list-container'>
      <ItemList books={books} />
    </div>
  )
}