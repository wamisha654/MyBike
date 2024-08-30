import React from 'react';
import Product from './Product.js';
import { Link } from 'react-router-dom';
import Sign from '.././SignIn/SignIn.js';

const ProductList = ({ data, onSelect }) => {
  const AllProducts = data.map((pro, i) => {
    return (
      <Link key={i} to={`/selectedProduct/`}>
        <Product
          title={pro.title}
          img={pro.img}
          prevPrice={pro.prevPrice}
          newPrice={pro.newPrice}
          star={pro.star}
          onSelect={onSelect}
          discription={pro.discription}
        />
      </Link>
    );
  });
  return <div className="ProductList">{AllProducts}</div>;
};
export default ProductList;
