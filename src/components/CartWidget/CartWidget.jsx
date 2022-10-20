import './CartWidget.css'
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useCartConstext } from '../context/CartContext';

export const CartWidget = () => {

  const {totalItems} = useCartConstext()

  return (
    <div className='cart-icon'>
      <Link to={'/cart'}>
      <CgShoppingCart className='cart-icon-img'/>
      </Link>
      {totalItems > 0 && <div className='count-item'><p className='count-item-num'>{totalItems}</p></div>}  
    </div>
  )
}
