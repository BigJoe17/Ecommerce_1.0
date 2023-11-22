import React from 'react'
import '../Components/CSS/LoginSignup.css';


function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text "placeholder='Enter Name' />
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Password' />
        </div>
        <button className='btn'>continue</button>
        <p className='loginsignup-login'> Already have an account?<span> Login</span> </p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id="" />
          <p>by continuing, I agree to use the terms & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup