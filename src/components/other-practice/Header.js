import React from 'react'
import logo from '../logo192.png'
import './Header.css'

const Header = () => {
  return (
    <header className='header' >
        <nav className='nav'>
        <img src={logo} alt='logo' style={{width:'40px' , height:'40px'}}></img> 
        <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </header>
  )
}

export default Header