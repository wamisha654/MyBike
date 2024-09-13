import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [productDetails, setProductDetails] = useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    serviceType: "",
    date: "",
    time: "",
    serviceDescription: ""
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const AdAppointment = async () => {  // Mark the function as async
  console.log(productDetails);

  let appointment = productDetails;

  try {
    // Using async/await for the fetch API request
    const response = await fetch('http://localhost:400/addappointment', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });

    const data = await response.json();

    // Check the success status
    if (data.success) {
      alert("Appointment added successfully!");
    } else {
      alert("Failed to add appointment.");
    }

    //Clear the form after submitting
    setProductDetails({
      fullName:"",
      email:"",
      phoneNumber:"",
      serviceType: "",
      date: "",
      time: "",
      serviceDescription: ""
    });
  } catch (error) {
    // Error handling in case the request fails
    console.error("Error adding appointment:", error);
    alert("An error occurred while adding the appointment.");
  }
};


  return (
    <div className="form">
      <form className="br3 ba dark-gray mv5 b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center pa4">
        <legend className="center f3">Appointment</legend>

        <div className="foms">
          <label>Full Name</label>
          <input
            type="text"
            value={productDetails.fullName}
            name="fullName"
            className="w-100"
            onChange={changeHandler}
          />
        </div>
        <div className="foms">
          <label>Email</label>
          <input
            type="text"
            value={productDetails.email}
            name="email"
            className="w-100"
            onChange={changeHandler}
          />
        </div>
        <div className="foms">
          <label>Phone number</label>
          <input
            type="text"
            value={productDetails.phoneNumber}
            name="phoneNumber"
            className="w-100"
            onChange={changeHandler}
          />
        </div>
        <div className="foms">
          <label>Service Type</label>
          <select
            value={productDetails.serviceType}
            name="serviceType"
            className="w-100"
            onChange={changeHandler} 
           >
            <option value="">Select a service</option>  
            <option value="DERAILLEUR ADJUSTMENT">DERAILLEUR ADJUSTMENT</option>
            <option value="BRAKE ADJUSTMENT">BRAKE ADJUSTMENT</option>
            <option value="HEADSET ADJUSTMENT">HEADSET ADJUSTMENT</option>
            <option value="TYRE REPLACEMENT">TYRE REPLACEMENT</option>
            <option value="REPLACING BRAKE PADS">REPLACING BRAKE PADS</option>
            <option value="BRAKE CABLE REPLACEMENT">BRAKE CABLE REPLACEMENT</option>
            <option value="BRAKE REPLACEMENT">BRAKE REPLACEMENT</option>
          </select>
        </div>


        <div className="foms">
          <label>Date</label>
          <input
            value={productDetails.date}
            type="date"
            name="date"
            className="w-100"
            onChange={changeHandler}
          />
        </div>

        <div className="foms">
          <label>Time</label>
          <input
            type="time"
            value={productDetails.time}
            name="time"
            className="w-100"
            onChange={changeHandler}
          />
        </div>

        <div className="foms">
          <label>Description</label>
          <textarea
            value={productDetails.serviceDescription}
            name="serviceDescription"
            className="w-100"
            onChange={changeHandler}
          />
        </div>

        <div className="foms sub">
          <button
            type="button"
            onClick={AdAppointment}
            className="appointment-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
