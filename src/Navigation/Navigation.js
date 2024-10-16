import React, { useState } from 'react';
import './Navigation.css';
import { BsCartFill } from "react-icons/bs";
import { RiAccountPinBoxFill } from "react-icons/ri";
import Sidebar from '../Sidebar/Sidebar.js';
import {Link} from 'react-router-dom';

const Navigation = ({ searchChange, clickCategory}) => {
  const handleCategoryClick = (category) => {
        clickCategory(category);
    }

  return (
    <nav className="nav-main">
      <div className="first-nav">
        <Link to="/" className="comp-name" href="#" title="Home">Marathon <span className="indented-txt">Bicycle</span></Link>
        <input type="search" placeholder="type here" onChange={searchChange} className="ssch gray" />
        <div className="icon-container">
          <Link to = "carts" className="cart-icon"><BsCartFill /><p>cart</p></Link>
        </div>
        <div className="icon-container">
          {localStorage.getItem('auth-token') 
        ? <button className=" logout-butt" onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace("/")}}>Logout</button>
        : <Link to = "signin" className="signin-icon"><RiAccountPinBoxFill /><p>sign in</p></Link>}
        </div>
        
        
        
      </div>

      <div className="">
        <ul className="Ulists">
          <li><Link to= "/store" className="link dim gray f6 f5-ns mr5"title="Store" onClick={() => handleCategoryClick(null)}>Store</Link></li>
          <li><Link to = "/service" className="link dim gray f6 f5-ns mr5" href="#" title="Service">Service</Link></li>
          <li><Link to = "/about" className="link dim gray f6 f5-ns mr5" href="#" title="About">About</Link></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navigation;
