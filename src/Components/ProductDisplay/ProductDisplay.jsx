import React from 'react'

import './ProductDisplay.css';

import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';


const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='product-display'>
            <div className="left">
                <div className="img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-img">
                    <img className='main' src={product.image} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{product.name}</h1>
                <div className="stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>4.5/5</p>
                </div>
                <div className="prices">
                    <p className="new">${product.new_price}</p>
                    <p className="old">${product.old_price}</p>
                    <p className="discount">
                        {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}% OFF
                    </p>
                </div>
                <div className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quibusdam minus labore explicabo
                    eum laboriosam natus consequatur provident molestiae vel hic deleniti delectus,
                    repudiandae libero ab omnis sint illo tempora.
                </div>
                <div className="size">
                    <h1>Select Size:</h1>
                    <select name="size" id="size">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div className="btn">
                    <button>Add To Cart</button>
                </div>
                <div className="category">
                    <p><span>Category: </span>Woman, T-shirt, Crop Top</p>
                    <p><span>Tags: </span>Modern, Latest</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
