import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import './Header.css'

export const Header = () => {
  return (
    <>
      <NavBar/>
      <div className='hero'>
        <h1 className='hero__title'>Librería Patrañas</h1>
      </div>
    </>
  )
}
