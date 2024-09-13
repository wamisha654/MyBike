import React from 'react';
import Product from './Product.js';
import { Link } from 'react-router-dom';


const ProductList = ({ data, onSelect }) => {
  const AllProducts = data.map((pro, i) => {
    return (
      <Link key={i} to={`/selectedProduct/`}>
        <Product
          name={pro.name}
          image={pro.image}
          old_price={pro.old_price}
          new_price={pro.new_price}
          star={pro.star}
          onSelect={onSelect}
          description={pro.description}
        />
      </Link>
    );
  });
  return <div className="ProductList">{AllProducts}</div>;
};
export default ProductList;
