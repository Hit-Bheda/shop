import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import user from '../../assets/User.svg'
import cart from '../../assets/cart.svg'
import search from '../../assets/search.svg'
import { CiMenuFries } from "react-icons/ci";



function Navbar() {
  return (
    <>
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">Catagory</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className="side-panel">
                <div className="search-panel">
                    <input type="text" name="" id="" />
                    <img src={search} alt="" />
                </div>
                <div className="cart">
                    <img src={cart} alt="" />
                </div>
                <div className="user">
                    <img src={user} alt="" />
                    <div className="menu">

                    <CiMenuFries />
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar