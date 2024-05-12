import React from 'react';
import './SignIn.css';
import 'tachyons';

const SignIn = () =>{
 return(
  <div className="SignIn">
   <article className="br3 ba dark-gray b--black-10 w-1000 w-50-m w-25-l mw5 shadow-5 center ">		
	<main className="pa4 black-80">
      <form className="measure " style={{textAlign: 'center'}}>
       <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
         <legend className="f3 fw6 ph0 mh0 center">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6 " for="email-address ">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 " type="email" name="email-address"  id="email-address" />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6 " for="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
          </div>
            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
       </fieldset>
         <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
         </div>
         <div className="lh-copy mt3">
           <a href="#0" className="f6 link dim black db ">Sign up</a>
           <a href="#0" className="f6 link dim black db">Forgot your password?</a>
         </div>
      </form>
   </main>
   </article>
   </div>
		);
}

export default SignIn;