import React from 'react';
import './Service.css';
import  ServicePayment from './ServicePayment.js';


const Service = () =>{
 return(
   <div className="service">
     <div className="service-containter">  
      <div className = "serv-img">
         <img  src="https://www.cardiffcycleworkshop.org.uk/wp-content/uploads/2021/04/level-2-1-1024x341.jpg" />
         <div className="text">
          <h1> BIKE SERVICE</h1> 
          <p>Your bike is in a good hand</p>    
         </div>
         
      </div>
      <div className="service-list">
        <h1>PUT YOUR BIKE IN THE HANDS OF A SPECIALIST</h1>
        <p>
            Our bicycle shop offers comprehensive bicycle service and 
            repair services. I am passionate about cycling and bicycle 
            mechanics and We know that proper care of your bike is the 
            key to safe riding. Our services are distinguished by the 
            use of the highest quality lubricants (Motorex, DT Swiss, 
            RSP, Muc Off), fluids (Shimano, Motul, FOX, Rock Shox) 
            and tools (Park Tool, Unior, Bitul), only from reputable 
            manufacturers, to make your bike work like new. In addition, 
            the laboratory is equipped with two washers – for bicycles and 
            for the drive. Your bike will always be waiting for you clean. 
            I invite you to familiarize yourself with the offer.
        </p>  
      </div>
      <div className="service-list">
        <h1>WHEELS AND TYRES</h1>
        <p>
            I specialize in the construction of bicycle wheels, which means that I offer the highest quality in terms of their service. In my bicycle service I deal with:

            <li>Custom wheel construction – more here,</li>
            <li>Repair and centering of wheels using a strain gauge,</li>
            <li>Replacement of rims, hubs and spokes,</li>
            <li>Replacement of bearings in hubs (Enduro, SKF, EZO bearings),</li>
            <li>Replacement of tires and inner tubes,</li>
            <li>Installation of tubeless tires.</li>
        </p>  
      </div >
      <div className="service-list">
        <h1>DRIVE</h1>
        <p>
           The drive is the heart of your bike, which is why I offer a wide range of services related to its maintenance. The cell also has a workshop washer designed for thorough cleaning of the drive. Services include:

          <li>Washing the drive with lubrication (Muc Off and Connex lubricants),</li>
          <li>Checking the wear status of the drive,</li>
          <li>Adjusting the derailleurs,</li>
          <li>Replacement of cables and housings,</li>
          <li>Chain and cassette replacement,</li>
          <li>Lubrication and maintenance of mechanisms,</li>
          <li>Service and replacement of bottom bracket inserts (BSA, Pressfit, ITA) and cranks.</li>
        </p>  
      </div >
      <div className="service-list">
        <h1>BRAKES</h1>
        <p>
            Safety is a priority, which is why I offer professional service of hydraulic and mechanical brakes, including:

          <li>Adjustment of disc and rim brakes,</li>
          <li>Diagnostics of squeaks during braking, straightening of brake discs, degreasing of braking surfaces,</li>
          <li>Replacement of brake pads,</li>
          <li>Bleeding and fluid replacement in hydraulic brakes (Sram, Shimano, Magura, Tektro),</li>
          <li>Replacement of brake lines,</li>
          <li>Replacement of brake cables and housings,</li>
          <li>Service of Sram brake calipers and levers.</li>
        </p>  
      </div>
      <div className="service-list">
        <h1>STEERING</h1>
        <p>
            Steering is crucial for the comfort and steering of the bike. Improperly set brake levers can result in danger on the road, but also discomfort while driving. My services include:

            <li>Adjustment of the handlebar, stem and handles,</li>
            <li>Replacement of handlebars, grips and brackets,</li>
            <li>Installation of new handlebars and wraps,</li>
            <li>Service and repair of headset bearings.</li>
        </p>  
      </div>
      <div className="service-price">
          
      </div>
      <ServicePayment />
      
  </div>  
   </div> 
  
  
		);
}

export default Service;