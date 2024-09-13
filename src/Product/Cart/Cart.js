import React from 'react';
import './Cart.css';
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { SiContactlesspayment } from "react-icons/si";

const Cart = ({ selectedProduct,onAddToCart }) => {
  // Check if selectedProduct is null before accessing its properties
  console.log(selectedProduct);
  if (!selectedProduct) {
    return (
      <div className="cart">
        <p>No product selected</p>
      </div>
    );
  }

  // Display selected product details
  return (
    <div className="cart">
      <div>
        <div className="img-container center">
          <h2>{selectedProduct.name}</h2>
          <img className="img" src={selectedProduct.image} alt="image" />
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>
            {selectedProduct.description}
          </p>
        </div>
      </div>
      <div className="add-cart ">
        <h1>{selectedProduct.new_price + " PLN"} </h1>
        <p>current price</p>
        <h2>{selectedProduct.name}</h2>
        <div className="listings">
          <li><p><FaShippingFast /> Free delivery from PLN 3999.99</p></li>
          <li><p><MdOutlineCalendarMonth /> 30 days for exchange and return, 60 days</p></li>
          <li><p><FaShippingFast />  Delivery time 1-5 business days</p></li>
          <li><p><SiContactlesspayment /> Payment methods: regular transfer, cash on delivery, online payment</p></li>
        </div>
        <button 
          className="button"
          onClick={() => onAddToCart(selectedProduct)} // Use onAddToCart prop
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
