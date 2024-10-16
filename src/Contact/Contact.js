import React from 'react';
import './Contact.css';
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiPersonSimpleBikeBold } from "react-icons/pi";
import { RiCustomerServiceFill } from "react-icons/ri";

const Contact = () =>{
	return(
	   <div className="contact">
	   	<div className="contact-page">
       	<h2>Contact our customer care</h2>
       	<p>Monday - Friday 9:00-17:00</p>
       	<div className="contact-icon-container">
       	    <a href="tel:+48729246430" className="contact-icon">
       	    	<p><SiMinutemailer /></p>
       	    	<p>Call us: +99 999 999 999</p>
       	    </a>
       		
          	<a href="mailto: wamikiya@gmail.com" className="contact-icon">
       	    	<p><FaPhoneAlt /></p>
       	    	<p>Write us: info@wamiBike.com</p>
         	</a>	
       		
          </div>
       </div>
       <div className="offer-container">
       	<div>
       		<h2>Why Marathon Bike?</h2>
       	</div>
       	<div className="offer-package">
       		<CiDeliveryTruck className="offer-icon"/>
       		<h3>Fast delivery</h3>
       		<p>We ship from our own warehouses, so you don't have to wait for confirmation of product availability. Delivery by courier usually takes one day.</p>
       	</div>
       	<div className="offer-package">
       		<PiPersonSimpleBikeBold className="offer-icon"/>
       		<h3>Professional service</h3>
       		<p>Your bikes will be in the hands of specialists</p>
       	</div>
       	<div className="offer-package">
       		<RiCustomerServiceFill className="offer-icon"/>
       		<h3>Prompt Customer service</h3>
       		<p>Our specialists will advise you on the selection of equipment and answer questions regarding the product.</p>
       	</div>
       </div>
	   </div>
       
		)
}
export default Contact;