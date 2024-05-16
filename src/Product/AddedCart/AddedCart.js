import React, { useState } from 'react';
import './AddedCart.css';
import { MdDeleteOutline } from "react-icons/md";

const AddedCart = ({ addedProducts, onProductRemove }) => { // Receive addedProducts and onProductRemove as props
  console.log(addedProducts);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  if(addedProducts.length === 0){
    return(
      <div>
        <h1 className="tc">Cart is empty</h1>
      </div>
      )
  }
  return (
    <div>
      {addedProducts.map((product, index) => ( 
        <div key={index} className="cart-card">
          <img className="mr6" src={product.img} alt="product" />
          <h3 className="mr6 w-10 f5">{product.title}</h3>
          <div className="mr6">
            <button onClick={decreaseQuantity}>-</button>
            <input className="tc" id="quantity" name="quantity" readOnly value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
            <button onClick={increaseQuantity}>+</button>
          </div>
          <p className="mr5">{product.newPrice}</p>
          <button onClick={() => onProductRemove(index)}><MdDeleteOutline /></button>
        </div>
      ))}
    </div>
  );
};

export default AddedCart;
