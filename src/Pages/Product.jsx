import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const pproduct = all_product.find(e => e.id === Number(productId));
  if (!pproduct) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <Breadcrums product={pproduct} />
      <ProductDisplay product={pproduct} />
    </div>
  );
};

export default Product;
