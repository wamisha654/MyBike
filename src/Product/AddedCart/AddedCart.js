import React, { useState } from 'react';
import './AddedCart.css';
import { MdDeleteOutline } from "react-icons/md";
import {Link} from 'react-router-dom';

const AddedCart = ({ addedProducts, onProductRemove }) => { 
  const [quantities, setQuantities] = useState(addedProducts.map(() => 1));

  const increaseQuantity = (index) => {
    setQuantities(prevQuantities => 
      prevQuantities.map((quantity, i) => i === index ? quantity + 1 : quantity)
    );
  };

  const decreaseQuantity = (index) => {
    setQuantities(prevQuantities => 
      prevQuantities.map((quantity, i) => (i === index && quantity > 1) ? quantity - 1 : quantity)
    );
  };

  const totalProduct = () => {
    var sum = 0;
    for (var i = 0; i < addedProducts.length; i++) {
      // Ensure newPrice is a number
      const price = parseFloat(addedProducts[i].newPrice);
      const quantity = quantities[i];
      
      if (!isNaN(price) && !isNaN(quantity)) {
        sum += price * quantity;
      } else {
        console.error('Invalid price or quantity', price, quantity);
      }
    }
    return sum;
  };

  if (addedProducts.length === 0) {
    return (
      <div>
        <h1 className="tc">Cart is empty</h1>
      </div>
    );
  }
  const includingDelivery =  ()=>{
    return totalProduct() + 40;
  }

  return (
    <div className="carted">
      <div>
        {addedProducts.map((product, index) => (
          <div key={index} className="cart-card">
            <img src={product.image} alt="product" />
            <h5 className="prod-name">{product.name}</h5>
            <div className="inc-dec-butt">
              <button onClick={() => decreaseQuantity(index)}>-</button>
              <input 
                className="tc" 
                id="quantity" 
                name="quantity" 
                readOnly 
                value={quantities[index]} 
              />
              <button onClick={() => increaseQuantity(index)}>+</button>
            </div>
            <p className="mr1">{product.new_price * quantities[index] + 'PLN'}</p>
            <button onClick={() => onProductRemove(index)}><MdDeleteOutline /></button>
          </div>
        ))}
      </div>
      <div className="cart-description">
        <p className="price-item">
          <span>Total:</span>
          <span>{totalProduct() + ' PLN'}</span>
        </p>
        <p className="price-item mt4">
          <span>Delivery:</span>
          <span>40 PLN</span>
        </p>
        <p className="price-item mt4">
          <span>Including delivery:</span>
          <span>{includingDelivery() + ' PLN'}</span>
        </p>
        <Link to="/delivery"><button className=" button">Delivery & Payment</button></Link>
          

          
        </div>
 
    </div>
  );
};

export default AddedCart;
