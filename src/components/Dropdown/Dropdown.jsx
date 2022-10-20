import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDownSLine } from 'react-icons/ri';
import './Dropdown.css'

export const Dropdown = () => {
  const [show, setShow] = useState(false)
  
  //un simple dropdown que quise hacer porque me resulta más comodo que el de bootstrap, se usa para elegir la categoria

  return (
    <div onMouseOver={()=> setShow(true)} onMouseOut={() => setShow(false)}>
      <div className='dropdown__title-container'>
        <h2 className='dropdown__title underline'>Categorias</h2>
        <RiArrowDownSLine className={show ? 'dropdown__arrow-rotate' : 'dropdown__arrow'}/>
      </div>
      <ul className={show ? 'dropdown__ul-show' : 'dropdown__ul'} onMouseOver={()=> setShow(true)} onMouseOut={() => setShow(false)}>
        <li className='dropdown__li'><Link to={'/'} className='underline'>Todos</Link></li>
        <li className='dropdown__li'><Link to={'/books/fantasía'} className='underline'>Fantasía</Link></li>
        <li className='dropdown__li'><Link to={'/books/terror'} className='underline'>Terror</Link></li>
        <li className='dropdown__li'><Link to={'/books/romance'} className='underline'>Romance</Link></li>
      </ul>
    </div>
  )
}
