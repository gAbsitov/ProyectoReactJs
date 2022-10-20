import React from 'react'
import './ItemDetail.css'
import {ItemCount} from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartConstext } from '../context/CartContext'
import Swal from 'sweetalert2'

export const ItemDetail = (props) => {
  const [showBtn, setshowBtn] = useState(true)

  const {addItem} = useCartConstext()

  const onAdd = (id, count) =>{
    setshowBtn(false)
    addItem(id, count, props)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `El libro "${props.name}" se agrego al carrito`,
      showConfirmButton: false,
      timer: 2000,
      toast: true
    })
  }

  return (
    <div className='detail'>
      <div>
        <img className='detail__img' src={props.img} alt="Imagen libro" />
        <p className='detail__text'> <span className='detail-span'>Stock:</span> {props.stock}</p>
        <p className='detail__text'>${props.price}</p>
      </div>
      <ul className='detail-text-container'>
        <li className='detail__title'>{props.name}</li>
        <li className='detail__text'>{props.autor}</li>
        <li className='detail__text'> <span className='detail__span'>Editorial:</span> {props.editorial}</li>
        <li className='detail__text'><span className='detail-span'></span>{props.sinopsis}</li>
        {showBtn ? <ItemCount stock={props.stock} id={props.id} onAdd={onAdd}/> : <Link to={'/cart'} className='detail__btn-cart' > Ir al carrito </Link>} 
      </ul>
    </div>
  )
}
