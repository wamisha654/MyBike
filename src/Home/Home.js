import React from 'react';
import './Home.css';
import imgShop from './shop.jpg';
import imgService from './service.jpg';
import children from './children.jpg';
import city from './city.png';
import road from './road.jpg';
import mountain from './mountain.webp';
import {Link} from 'react-router-dom';


const Home = () =>{
 return(
  <div className="home">
   <h2 className="types">Welcome to our site</h2>  
   <div className="main-container">
    <div className = "container">
     <div className="wrapper">
     <Link to= "/service">
     <div className="wrapper-holder">
     
       <div id="slider-img-1"></div>
       <div id="slider-img-2"></div>
       <div id="slider-img-3"></div>
       <div id="slider-img-4"></div>
       
     </div>
     </Link>
     <div className="overlay">
       <h1 className="overlay-service">Service</h1>
     </div>
   </div>
   <div className="button-holder">
     <a href="#slider-img-1" className="button"></a>
     <a href="#slider-img-2" className="button"></a>
     <a href="#slider-img-3" className="button"></a>
     <a href="#slider-img-4" className="button"></a>
    </div>  
    
    </div>
    <div className="shop">
          <Link to="/store">
            <img src={imgShop} alt="image" />
          </Link>
          <div className="overlay">
           <h1 className="overlay-service">Shop</h1>
          </div>
    </div>
    
   </div>
  <h2 className="types">Is this what you are looking for?</h2>  
  <div className="img-wrapper">
     <a className="children relative f2">
       <img src={children} alt="image" />
       <div className="overlay">
           <h1 className="overlay-service">Children</h1>
       </div>
     </a>
     <a className="mountain relative f2">
      <img src={mountain} alt="image" />
      <div className="overlay">
           <h1 className="overlay-service">Mountain</h1>
          </div>
     </a>
     
  </div>
  <div className="img-wrapper">
     <a className="road relative f2">
       <img src={road} alt="image" />
       <div className="overlay">
           <h1 className="overlay-service">Road</h1>
          </div>
     </a>
     <a className="city relative f2">
      <img src={city} alt="image" />
      <div className="overlay">
           <h1 className="overlay-service">City</h1>
          </div>
     </a>
     
  </div>
  <h2 className="types">The brand you'll find</h2> 
  <div className="second-container">

    <div className="wrapper-holder">
       <div id="slider-img-5"></div>
       <div id="slider-img-6"></div>
       <div id="slider-img-7"></div>
       <div id="slider-img-8"></div>

     </div>
  </div>
  
  </div>
  
		);
}

export default Home;