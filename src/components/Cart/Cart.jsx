import React from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from '../CartItem/CartItem'
import { useCartConstext } from '../context/CartContext'
import './Cart.css'

export const Cart = () => {
  const {cartList, total} = useCartConstext()  

  return (
    total === 0 ? 
    <div className='cart__empty'>
      <h2 className='cart__empty-title'>No hay articulos en el carrito</h2>
      <Link to='/' ><button className='cart__empty-btn'>Ir a Comprar</button></Link>
    </div> :
    <div className='cart'>
      <h2 className='cart__title'>Carrito de Compras</h2>
      {cartList.map(item =>{
        return(
          <CartItem key={item.id} id={item.id} amount={item.amount} name={item.book.name} price={item.book.price} autor={item.book.autor} editorial={item.book.editorial} img={item.book.img} />
        )
      }) }  
      <li className='cart__buy-container'>
        <ul><h2 className='cart__buy-total'>Total:${total}</h2></ul>
        <ul><Link to={'/cart/checkout'}><button className='cart__buy-btn'>Finalizar compra</button></Link></ul>
        
      </li>
    </div>
  )
}
