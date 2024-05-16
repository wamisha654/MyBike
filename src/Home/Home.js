import React from 'react';
import './Home.css';
import imgShop from './shop.jpg';
import imgService from './service.jpg';


const Home = () =>{
 return(
  <div>   
   <div className="main-container">
    <div className = "container">
     <div className="wrapper">
     <div className="wrapper-holder">
       <div id="slider-img-1"></div>
       <div id="slider-img-2"></div>
       <div id="slider-img-3"></div>
       <div id="slider-img-4"></div>

     </div>
   </div>
   <div className="button-holder">
     <a href="#slider-img-1" className="button"></a>
     <a href="#slider-img-2" className="button"></a>
     <a href="#slider-img-3" className="button"></a>
     <a href="#slider-img-4" className="button"></a>
    </div>  
     
    </div>
    <img src={imgShop} alt="image" /> 
   </div>
   
  <div className="img-wrapper">
     <img src={imgShop} alt="image" />
     <img src={imgService} alt="image" />
  </div>
  <div className="img-wrapper">
     <img src={imgShop} alt="image" />
     <img src={imgService} alt="image" />
  </div>
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