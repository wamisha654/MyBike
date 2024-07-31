import React, { useState } from 'react';
import './ServicePayment.css';
import Appointment from './Appointment.js';

const ServicePayment = () =>{
	const [showAppointment, setShowAppointment] = useState(false)
	const pageAppointment = () =>{
    setShowAppointment(!showAppointment);
  }
	return(
    <div>
        <h1 className="tc">OUR PRICE</h1>
    	<div className = "price-adj">
    		<h2>DERAILLEUR ADJUSTMENT</h2>
    		<p>30 - 50 PLN</p>
    	</div>
    	<div className = "price-adj">
    		<h2>BRAKE ADJUSTMENT</h2>
    		<p>20 - 40 PLN</p>
    	</div>
    	<div className = "price-adj">
    		<h2>HEADSET ADJUSTMENT</h2>
    		<p>20 - 40 PLN</p>
    	</div>
    	<div className = "price-adj">
    		<h2>HUB ADJUSTMENT</h2>
    		<p>20 PLN</p>
    	</div>
    	<div className = "price-adj">
    		<h2>TYRE REPLACEMENT</h2>
    		<p> 30 PLN</p>
    	</div>
    	<div className = "price-adj">
    		<h2>REPLACING BRAKE PADS</h2>
    		<p>25 - 40 PLN</p>
    	</div>
    	<div className = "price-adj">
    		<h2>BRAKE CABLE REPLACEMENT</h2>
    		<p>20 - 50 PLN</p>
    	</div>
    	<div className = "price-adj">
    		<h2>BRAKE REPLACEMENT</h2>
    		<p>20 PLN</p>
    	</div>
    	<div className="tc appoint-butt">
    		<button onClick={pageAppointment}>Make appointment</button>
    	</div>
    	{showAppointment && <Appointment />}
    </div>
		)
}
export default ServicePayment;