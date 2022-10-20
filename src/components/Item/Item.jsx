import './Item.css'
import {Link} from 'react-router-dom'

export const Item = (props) => {

  return ( 
      <ul className='item'>
        <li><img className='item__img' src={props.img} alt='Imagen del producto'/></li>
        <li className='item__title'>{props.name}</li>
        <li className='item__text'>Autor: {props.autor}</li>
        <li className='item__text'>Género: {props.genres}</li>
        <li className={props.stock > 0 ? 'item__stock-true' : 'item__stock-false'}>{props.stock > 0 ? "En Stock" : "Sin Stock"}</li>
        <Link to={`/detalles/${props.id}`}>
          <button disabled={props.stock > 0 ? false : true} className='btn'>Ver Detalles</button>
        </Link>
      </ul>
  )
}
