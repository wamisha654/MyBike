import React from 'react';
import './Product.css';

const Product = (props) => {
  const handleClick = () => {
    // Log the props before passing them to the onSelect function
    console.log(props);
    props.onSelect(props); // Pass the selected product's props to the onSelect function
  };

  return (
    <div className="products">
      <section className="card" onClick={handleClick}>
        <img src={props.image} className="card-img" />
        <div className="card-details">
            <h3 className="card-title">{props.name}</h3>
            <div className="price">
              <del>{props.old_price + " PLN"}</del>
              <p>{props.new_price + " PLN"}</p>
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default Product;
