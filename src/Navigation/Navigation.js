import React, { useState } from 'react';
import './Navigation.css';
import { BsCartFill } from "react-icons/bs";
import { RiAccountPinBoxFill } from "react-icons/ri";
import Sidebar from '../Sidebar/Sidebar.js';
import {Link} from 'react-router-dom';

const Navigation = ({ searchChange, clickCategory, priceRange}) => {
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);
 
  const toggleFilterSidebar = () => {
    setShowFilterSidebar(!showFilterSidebar);
  };
  const handleCategoryClick = (category) => {
        clickCategory(category);
    }

  return (
    <nav className="pa3 pa4-ns">
      <div className="first-nav">
        <Link to="/" className="comp-name mr5" href="#" title="Home">Wami Bikes</Link>
        <input type="search" placeholder="type here" onChange={searchChange} className="link ssch gray f6 tc f5-ns mr5" />
        <Link to = "carts" className="link mr3 f3"><BsCartFill /></Link>
        {localStorage.getItem('auth-token') 
        ? <button className=" logout-butt link mr3 f3" onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace("/")}}>Logout</button>
        : <Link to = "signin" className="link f3"><RiAccountPinBoxFill /></Link>}
        
        
      </div>

      <div className="tc pb3">
        <ul className="Ulists">
          {/*<li>
            <Link  className="link dim gray f6 f5-ns mr5"  title="category">Category</Link>
            <ul id="submenu">
              <li><a className="link black  f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("city")}>City bikes</a></li>
              <li><a className="link black  f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("electric")}>Electric bikes</a></li>
              <li><a className="link black  f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("cross")}>Cross bikes</a></li>
              <li><a className="link black  f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("road")}>Road bikes</a></li>
              <li><a className="link black  f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("mountain")}>Mountain bikes</a></li>
              <li><a className="link  black f6 f5-ns mr5" href="#" title="About" onClick={() => handleCategoryClick("children")}>Children bikes</a></li>
            </ul>
          </li>*/}
          <li><Link to= "/store" className="link dim gray f6 f5-ns mr5"title="Store" onClick={() => handleCategoryClick(null)}>Store</Link></li>
          <li><Link to = "/service" className="link dim gray f6 f5-ns mr5" href="#" title="Service">Service</Link></li>
          <li><a className="link dim gray f6 f5-ns mr5" href="#" title="About">About</a></li>

          {/*<li><a className="link dim gray f6 f5-ns mr5" onClick={toggleFilterSidebar} href="#" title="Filter">Filter</a></li>*/}
          <li><a className="link dim gray f6 f5-ns mr5" href="#" title="Contact">Contact</a></li>
        </ul>
      </div>
      {showFilterSidebar && <Sidebar toggleFilterSidebar={toggleFilterSidebar} clickCategory={clickCategory} priceRange={priceRange}/>}
      
    </nav>
  );
};

export default Navigation;
