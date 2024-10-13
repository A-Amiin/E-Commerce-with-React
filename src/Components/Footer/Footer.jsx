import React from 'react'

import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import insta_logo from '../Assets/instagram_icon.png';
import whats_logo from '../Assets/whatsapp_icon.png';
import pintester from '../Assets/pintester_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>The Shop</p>
      </div>
      <ul className="footer-links">
        <li>About</li>
        <li>Contact</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Company</li>
      </ul>
      <div className="footer-social">
        <a href="#"><img src={insta_logo} alt="" /></a>
        <a href="#"><img src={whats_logo} alt="" /></a>
        <a href="#"><img src={pintester} alt="" /></a>
      </div>
      <p className="footer-copyright">&copy; 2024 The Shop. All rights reserved.</p>
    </div>
  )
}

export default Footer
