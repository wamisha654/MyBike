import React, { useState } from 'react';
import './SignIn.css';
import 'tachyons';

const SignIn = () => {

  const [state, setState] = useState("Login");
  const [userType, setUserType] = useState("User");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    userType: "User",  // Default to User
    adminKey: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleUserTypeChange = (e) => {
    const selectedUserType = e.target.name;  // Use name to distinguish between User and Admin
    setUserType(selectedUserType);
    setFormData({ ...formData, userType: selectedUserType });  // Update formData with userType
  }

  const login = async () => {
  console.log("login func", formData);
  let responseData;
  await fetch('http://localhost:400/login', {
    method: 'POST',
    headers: {
      Accept: 'application/form-data',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then((response) => response.json())
  .then((data) => responseData = data);

  if (responseData.success) {
    localStorage.setItem('auth-token', responseData.token);    
    const loggedInUserType = responseData.userType;
    if (loggedInUserType === "Admin") {
      window.location.replace("http://localhost:3001/");  // Redirect to admin panel
    } else {
      window.location.replace("http://localhost:3000/");  // Redirect to user page
    }
  } else {
    alert(responseData.errors);
  }
};


  const signup = async () => {
    if (userType === "Admin" && formData.adminKey !== "wamiBike") {
      alert("Invalid Admin Key");
    } else {
      console.log("signup func", formData);
      let responseData;
      await fetch('http://localhost:400/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((response) => response.json())
        .then((data) => responseData = data);

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        if (formData.userType === "Admin") {
          window.location.replace("http://localhost:3001/");
        } else {
          window.location.replace("http://localhost:3000/");
        }
      } else {
        alert(responseData.errors);
      }
    }
  }

  return (
    <div className="SignIn">
      <article className="br3 ba dark-gray b--black-10 w-1000 w-50-m w-25-l mw5 shadow-5 center ">
        <main className="pa4 black-80">
          <form className="measure " style={{ textAlign: 'center' }}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0 center">{state}</legend>
              <div className="mt3">
                {state === "Sign Up" ? (
                  <div>
                    <div className="input-radio">
                      <div>
                        <input
                          type="radio"
                          name="User"
                          checked={userType === "User"}  // Bind to userType
                          onChange={handleUserTypeChange}  // Handle change
                          id="userType"
                        />{" "} User
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="Admin"
                          checked={userType === "Admin"}  // Bind to userType
                          onChange={handleUserTypeChange}  // Handle change
                          id="userType"
                        />{" "} Admin
                      </div>
                    </div>
                    {userType === "Admin" ? (
                      <div>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                          type="text" placeholder="adminKey"
                          name="adminKey" value={formData.adminKey}
                          onChange={changeHandler}
                          id="adminKey" />
                      </div>
                    ) : null}

                    <div className="mt3">
                      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="name" type="name"
                        name="username" value={formData.username}
                        onChange={changeHandler} id="name" />
                    </div>
                  </div>
                ) : <></>}
              </div>
              <div className="mt3">
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  placeholder="email" type="email"
                  name="email" value={formData.email}
                  onChange={changeHandler} id="email-address" />
              </div>
              <div className="mv3">
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  placeholder="password"
                  name="password" value={formData.password}
                  onChange={changeHandler} id="password" />
              </div>
              {state === "Login" ? (
                <label className="pa0 ma0 lh-copy f6 pointer"><p> You don't have account?
                  <span className="signup-route" onClick={() => { setState("Sign Up") }}>
                    Create</span></p></label>
              ) : (
                <label className="pa0 ma0 lh-copy f6 pointer"><p> Already have an account?
                  <span className="signup-route" onClick={() => { setState("Login") }}>
                    Click here</span></p></label>
              )}
            </fieldset>
            <div className="">
              <button onClick={() => { state === "Login" ? login() : signup() }}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="button"> Continue </button>
            </div>
          </form>
        </main>
      </article>
    </div>
  );
}

export default SignIn;
