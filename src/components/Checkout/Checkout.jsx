import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useCartConstext } from '../context/CartContext'
import { db } from '../../firestore/firestore'
import './Checkout.css'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'

export const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { total, cartList, clearCart } = useCartConstext()
  const navigate = useNavigate()

  /*Funcion que resive los datos del form, realiza un map sobre los articulos en el carrito para guardarlos en un objeto guardar todo esto en un objeto más grande con todos los datos de la ordern de compra y actualizar el stock de los productos comprados */
  const onSubmit = (data) => {
    const buyer = data
    const items = cartList.map(item => { return { id: item.id, name: item.book.name, price: item.book.price, amount: item.amount } })
    const date = new Date()
    const order = { buyer, items, date, total }
    generateOrder(order)
    setUpdate()
    clearCart()
  }
  
  //genera la order de compra con los datos dados en la funcion onSubmit y le proporciona al usuario el id de la orden

  const generateOrder = async (data) => {
    try {
      const col = collection(db, "Orders")
      const order = await addDoc(col, data)
      Swal.fire(
        'Compra Finalizada',
        `Tu codigo de seguimiento es: ${order.id}`,
        'success'
      ).then((result)=>{
        navigate('/');
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Se encarga de actualizar el stock de los productos comprados

  const setUpdate = () => {
    try {
      cartList.forEach(item => {
      const docRef = doc(db, 'Books', item.id)
      const newStock = item.book.stock - item.amount
      updateDoc(docRef, {
        stock: newStock
      })
    })
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    cartList.length > 0 ? 
    <div className='checkout-container'>
      <h2 className='checkout__title'>Finalizar compra</h2>
      <h3 className='checkout__subtitle'>Completa los campos:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='checkout__input-container'>
          <label className='checkout__label'>Nombre</label>
          <input className='checkout__input' type="text" autoComplete="off" {...register('name', {
            required: true
          })} />
          {errors.name?.type === 'required' && <h3>El campo de Nombre es obligatorio</h3>}
        </div>
        <div className='checkout__input-container'>
          <label className='checkout__label'>Telefono</label>
          <input className='checkout__input' type="tel" autoComplete="off" {...register('tel', {
            required: true
          })} />
          {errors.tel?.type === 'required' && <h3>El campo de Telefono es obligatorio</h3>}
        </div>
        <div className='checkout__input-container'>
          <label className='checkout__label'>Email</label>
          <input className='checkout__input' type="email" autoComplete="off" {...register('email', {
            required: true
          })} />
          {errors.email?.type === 'required' && <h3>El campo de Email es obligatorio</h3>}
          <input className='checkout__btn' type="submit" value="Enviar" />
        </div>
      </form>
    </div> :
    <div className='cart__empty'>
    <h2 className='cart__empty-title'>No hay articulos en el carrito</h2>
    <Link to='/' ><button className='cart__empty-btn'>Ir a Comprar</button></Link>
  </div>
  )
}
