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
        <img src={props.img} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{props.title}</h3>
          <div className="card-reviews">
            <div className="ratings-star">{props.star}{props.star}{props.star}</div>
          </div>
          <section className="card-price">
            <div className="price">
              <del>{props.prevPrice}</del>{props.newPrice}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Product;
