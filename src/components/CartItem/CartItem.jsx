import React from 'react'
import { useCartConstext } from '../context/CartContext'
import './CartItem.css'

export const CartItem = ({id, amount, name, autor, price, editorial, img}) => {

  const {subItem} = useCartConstext()
  
  return (
    <div className='cart-item'>
        <img className='cart-item__img' src={img} alt={name} />
      <div className='cart-item__info'>
        <h2 className='cart-item__title'>{name}</h2>
        <h3 className='cart-item__subtitle'>{autor}</h3>
        <h3 className='cart-item__subtitle'>{editorial}</h3>
        <p className='cart-item__text'>Cantidad: {amount}</p><p className='cart-item__text'>Precio: ${price}</p>
      </div>
      <button className='cart-item__delete' onClick={()=> subItem(id)}>Eliminar</button>
    </div>
  )
}
