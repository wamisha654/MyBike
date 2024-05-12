import React from 'react'
import './Appointment.css';
const Appointment = () =>{
	return(
	<div className = "form">
	  <form className="br3 ba dark-gray mv5 b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center pa4 ">
      <legend className="center f3">Appointment</legend>
      <div className = "foms ">
      <label>Service  </label>
      <input type = "text" className = " w-100"/>
      </div> 
      <div className = "foms">
      	<label>Date  </label>
        <input type = "date" className = " w-100"/>
      </div > 
      <div className = "foms">
      	<label>Time  </label>
        <input type = "time" className = " w-100"/>
      </div> 
      <div className = "foms sub ">
      	<input type = "submit" className ="b  ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib "/>
      </div> 
      
     </form>    
	</div>	
     
		)
}
export default Appointment;