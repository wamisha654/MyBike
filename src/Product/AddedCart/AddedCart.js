import React, { useState, useEffect } from 'react';
import './AddedCart.css';
import { MdDeleteOutline } from "react-icons/md";
import {Link} from 'react-router-dom';
import Delivery from '../Delivery/Delivery.js';
import { IoMdAlert } from "react-icons/io";
import { GiPostOffice } from "react-icons/gi";
import inpost from './inpost.webp';
import dpd from './dpd.png';
import blik from './blik.webp';
import visa from './visa.png';
import cash from './cash.jpg';
import card from './card.webp';
import { BsTruck } from "react-icons/bs";
import { SiContactlesspayment } from "react-icons/si";



const AddedCart = ({ addedProducts, onProductRemove, setTotalProduct }) => { 
  const [quantities, setQuantities] = useState(addedProducts.map(() => 1));
  const [order, setOrder] = useState({
    productId:"",
    image:"",
    final_price:"",
    product_name:"",
    delivery: "",
    name:"",
    lastName: "",
    email: "",
    phone: "",
    invoice: "",
    address: "",  
    paymentMethod: "",
    quantity: ""
  })
  const changeHandler =(e) =>{
      setOrder({...order,[e.target.name]:e.target.value})
    }
  
  const sendOrder = async () => {  

  const productId = addedProducts.map(product => product.id);
  const productNames = addedProducts.map(product => product.name);
  const productPrices = addedProducts.map((product, index) => {
        const finalPrice = product.new_price * quantities[index];
        return finalPrice;  // Return the final price for each product
    });
  const productImages = addedProducts.map(product => product.image);
  const productQuantities = quantities.map(quantity => quantity);

  let newOrder = {
    ...order,
    productId: productId.join(", "),
    product_name: productNames.join(", "),    // Add product names
    final_price: productPrices,
    image: productImages.join(", "),  // Add product images
    quantity: productQuantities.join(", "),
  };
  console.log(newOrder);
  
  try {
    // Using async/await for the fetch API request
    const response = await fetch('http://localhost:400/order', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    });

    const data = await response.json();

    // Check the success status
    if (data.success) {
      alert("Order added successfully!");
    } else {
      alert("Failed to add order.");
    }

    //Clear the form after submitting
    // setProductDetails({
    //   fullName:"",
    //   email:"",
    //   phoneNumber:"",
    //   serviceType: "",
    //   date: "",
    //   time: "",
    //   serviceDescription: ""
    // });
  } catch (error) {
    // Error handling in case the request fails
    console.error("Error adding order:", error);
    alert("An error occurred while adding the appointment.");
  }
};


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
      const price = parseFloat(addedProducts[i].new_price);
      const quantity = quantities[i];
      
      if (!isNaN(price) && !isNaN(quantity)) {
        sum += price * quantity;
      } else {
        console.error('Invalid price or quantity', price, quantity);
      }
    }
    return sum;
  };

  useEffect(() => {
    // Update the totalProduct in App.js whenever quantities change
    setTotalProduct(totalProduct());
  }, [quantities, addedProducts, setTotalProduct]);

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
  console.log("Total Product:", totalProduct());


  return (
    <div className="carted">
      <div className="list-container">
        <div className="cart-prod-list">
        {addedProducts.map((product, index) => {
          const final_price = product.new_price * quantities[index]
          return(
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
                    <p className="mr1">{final_price + 'PLN'}</p>
                    <button onClick={() => onProductRemove(index)}><MdDeleteOutline /></button>
                  </div>
                )})}
      </div>
      <div className="delivery-card-container-main">
      <div className="deliv-title"><h3>Select delivery option</h3><BsTruck /></div>
      <div className="delivery-card-container">
      <div className="delivery-card">
        <input 
          type="radio"
          name="delivery"
          value="inpost" // Set value for this option
          onChange={changeHandler}
         />
        <img src={inpost} />
        <p>Delivery</p>
      </div>
      <div className="delivery-card">
        <input 
          type="radio"
          name="delivery"
          value="dpd" // Set value for this option
          onChange={changeHandler}
        />
        <img src={dpd} />
        <p>Delivery</p>
      </div>
    </div>
      </div>
      
      <div className="delivery">
        <h3>Order Recipient Details</h3>
        <div className="address-itemfield">
          <input type="text"  name='name' value={order.name} onChange={changeHandler} placeholder="Name" />
        </div>
        <div className="address-itemfield">
          <input type="text" name='lastName' value={order.lastName} onChange={changeHandler} placeholder="Last Name" />
        </div>
        <div className="address-itemfield">
          <input type="text" name='email' value={order.email} onChange={changeHandler} placeholder="Email" />
        </div>
        <div className="address-itemfield">
          <label className="address-label">Phone (Polish phone number)</label>
          <input type="text" name="phone" value={order.phone} onChange={changeHandler}/>
        </div>
        <div className="address-itemfield">
          <label className="address-label">Do you need an invoice</label>
          <select className="address-select" name="invoice" onChange={changeHandler} >
             <option value="No">I don't need an invoice</option>
             <option value="Yes">Yes, I need an invoice</option>
          </select>
        </div>
        <div className="address-itemfield">
          <input type="text" name='address' value={order.address} onChange={changeHandler} placeholder="Address" />
        </div>
        <p><IoMdAlert /> Shipping is only possible within Poland</p>
      </div>
      <div className="payment-card-container-main">
      <div className="deliv-title"><h3>Select Payment option</h3><SiContactlesspayment /></div>
      <div className="payment-card-container">
      <div className="payment-card">
        <input type="radio" name="paymentMethod" onChange={changeHandler} value="blik"/>
        <img src={blik} />
        <p>Blik</p>
      </div>
      <div className="payment-card">
        <input type="radio" name="paymentMethod" onChange={changeHandler} value="card"/>
        <img src={card} />
        <p>Card payment</p>
      </div>
      <div className="payment-card">
        <input type="radio" name="paymentMethod" onChange={changeHandler} value="cash"/>
        <img src={cash} />
        <p>Cash on delivery</p>
      </div>
      <div className="payment-card">
        <input type="radio" name="paymentMethod" onChange={changeHandler} value="cash"/>
        <img src={visa} />
        <p>Mobile visa</p>
      </div>
    </div>
      </div>
      </div>
      
      <div className="cart-description">
      <div>
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
      </div>
      <div className="payment-button">
            <button onClick={()=>{sendOrder()}} className="button">Pay</button>
      </div>
    </div>
 
    </div>
  );
};

export default AddedCart;
