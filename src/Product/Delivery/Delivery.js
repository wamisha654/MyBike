import React, { useState } from 'react';
import './Delivery.css';
import {Link} from 'react-router-dom';


const Delivery =()=>{
    return (
    <div className="carted">

      <div className="delivery">
         <h1>Order recipint details</h1>
         <div className="address-itemfield">
                <input type="text" name='name' placeholder="Name" />
         </div>
         <div className="address-itemfield">
                <input type="text" name='lastName' placeholder="Last Name" />
         </div>
         <div className="address-itemfield">
                <input type="text" name='email ' placeholder="Email" />
         </div>
         <div className="address-itemfield">
           <label htmlFor="phoneNumber" className="address-label">Phone (Polish phone number)</label>
           <input type="text"  name="phoneNumber" />
         </div>

         <div className="address-itemfield">
                <label htmlFor="invoice" className="address-label">Do you need an invoice</label>
                <select className="address-select" type="number" name='phoneNumber ' placeholder="Phone(Polish phone number)">
                  
                  <option value="no">I don't need an invoice</option>
                  <option value="yes">Yes i need an invoice</option>

                </select>
         </div>
         <div className="address-itemfield">
                <input type="text" name='address ' placeholder="Address" />
         </div>
         <p>Shipping is only possible within Poland</p>

        </div>
      <div className="cart-description">
        <p className="price-item">
          <span>Total:</span>
          <span></span>
        </p>
        <p className="price-item mt4">
          <span>Delivery:</span>
          <span>40 PLN</span>
        </p>
        <p className="price-item mt4">
          <span>Including delivery:</span>
          <span></span>
        </p>
          <button className="button">Pay</button>

          
        </div>
 
    </div>
  );

}




export default Delivery;
