import React from 'react'

import './Offers.css';
import exc_img from '../Assets/exclusive_image.png';
const Offers = () => {
  return (

    <div className='offers'>
        <div className="offers-left">
        <h2>Discover Our Offers</h2>
        <p>Get a free sample of our latest product or join our newsletter to stay updated on special offers.</p>   
        <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={ exc_img } alt="" />
        </div>
    </div>
  )
}

export default Offers
