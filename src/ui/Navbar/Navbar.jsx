import React from 'react'
import './Navbar.scss'
import Btn from '../button/Btn.jsx'
const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src="../../../public/logo-mission.png" alt="" />
         </div>
        <input type="checkbox" className="toggler"/>
        <div className="hamburger">
            <div></div>
        </div>
        <div className="menu">
                    <a href="#" className="active"> HOME</a>
                    <a href="#"> LOST PETS</a>
                    <a href="#"> FOUND PETS</a>
                    <a href="#"> REUNITED PETS</a>
                    <a href="#"> RESOURCES</a>
                    <a href="#"> ABOUT US</a>
                    <a href="#"> CONTACT US</a>
                    <a href="#"> <Btn class = "bg-orange" text = "LOGIN" />
                    </a>
        </div>
    </nav>
  )
}

export default Navbar