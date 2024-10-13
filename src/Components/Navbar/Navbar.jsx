import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';


const Navbar = () => {
    const [list , setList ] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>The Shop</p>
      </div>
      <ul className="nav-links">
        <li onClick={() => setList("shop")}>
          <Link style={{textDecoration:'none',color:'black'}} to="/">Shop</Link>
          {list === "shop" ? <hr /> : ""}
        </li>
        <li onClick={() => setList("men")}>
          <Link style={{textDecoration:'none',color:'black'}} to="/Mens">Men</Link>
          {list === "men" ? <hr /> : ""}
        </li>
        <li onClick={() => setList("women")}>
          <Link style={{textDecoration:'none',color:'black'}} to="/Women">Women</Link>
          {list === "women" ? <hr /> : ""}
        </li>
        <li onClick={() => setList("kids")}>
          <Link style={{textDecoration:'none',color:'black'}} to="/Kids">Kids</Link>
          {list === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration:'none',color:'black'}} to="/Login"><button>Login</button></Link>
        <Link style={{textDecoration:'none',color:'black'}} to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
        <span className='nav-cart-counter'>0</span>  {/* Replace with actual cart count */}
      </div>
    </div>
  )
}

export default Navbar