import React from 'react'
import logo from '../../assets/logo.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div>
            <img className="logo"src={logo} alt="Move Up Logo" />
        </div>
        <div className="menu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
    </div>
  )
}

export default NavBar