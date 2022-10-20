import React from 'react'
import { Item } from '../Item/Item'
export const ItemList = ({books}) => {
  
  return (
    <>
      {books.map(book =>{
        return(
          <Item key={book.id} name={book.name} autor={book.autor} genres={book.genre} stock={book.stock} img={book.img} id={book.id}/>
        )
      })}
    </>
  )
}
