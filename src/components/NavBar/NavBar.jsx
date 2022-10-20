import './NavBar.css'
import {CartWidget} from '../CartWidget/CartWidget'
import { Dropdown } from '../Dropdown/Dropdown'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="nav">
      <Link to={'/'} className='nav__home' > <h2>Patrañas</h2> </Link> 
      <Dropdown/>
      <CartWidget/>
    </nav>
  )
}
