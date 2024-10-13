import React from 'react';
import './breadcrum.css';
import arrow from '../Assets/breadcrum_arrow.png';

const Breadcrums = ({ product }) => {  // Destructure product from props
    return (
        <div className='breadcrum'>
            HOME
            <img src={arrow} alt="" />
            SHOP
            <img src={arrow} alt="" />
            {product.category}  {/* Access category */}
            <img src={arrow} alt="" />
            {product.name}  {/* Access name */}
        </div>
    );
}

export default Breadcrums;