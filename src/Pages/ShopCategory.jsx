import React, { useContext } from 'react';

import './AllCss/ShopCategory.css';
import drop_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  // Extract all_product from the ShopContext
  const { all_product } = useContext(ShopContext);

  // Check the value of all_product in the console
  console.log("The productssssssss: ", all_product);

  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="shop-category-index-sort">
        <p><span>Showing 1-12</span> out of 36 products</p>
        <div className="shop-category-sort">
          Sort by <img src={drop_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          } else {
            return null;
          }
        })}
      </div>
      <div className="load-more">
        <button>Load More...</button>
      </div>
    </div>
  );
};

export default ShopCategory;
