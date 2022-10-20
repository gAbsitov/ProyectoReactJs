import './ItemCount.css'

import React, {useState} from 'react'

export const ItemCount = ({stock, onAdd, id}) => {
  const [count, setCount] = useState(1)

  const add = () =>{
    if(count < stock){
      setCount(count + 1)
    }
  }

  const sub = () =>{
    if(count > 1 ){
      setCount(count - 1)
    }
  }

  return (
      <div className="item-count">
        <p className='item-count-text'>Cantidad: {count}</p>
        <div className='item-count-container-btn'>
          <button className='item-count-btn btn-sub' onClick={() => sub()}>-</button>
          <button className='item-count-btn btn-add' onClick={() => add()}>+</button> 
          <button className='item-count-btn btn-cart' onClick={() => onAdd(id, count)}>Añadir al carrito</button>
        </div>
        
      </div>
  )
}
