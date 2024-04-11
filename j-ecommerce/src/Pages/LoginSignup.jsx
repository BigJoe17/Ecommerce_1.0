import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/CSS/LoginSignup.css';
import './Signup/Signup.css';

function LoginSignup() {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
 

  

  const handleSignup = async () => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, username, email, password,role }),
      });
      const data = await response.json();
      if (response.ok) {
        // Redirect to the home page or any other route after successful signup
        navigate('/');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred, please try again');
    }
  };

  return (
    <>
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input
            type="text"
            placeholder='Full Name'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
             <input
            type="text"
            placeholder='role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button className='btn' onClick={handleSignup}>Continue</button>
        <Link to="/login">
        <p className='loginsignup-login'>Already have an account?<span>Login</span></p>
        </Link>
        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id="" />
          <p>by continuing, I agree to use the terms & privacy policy</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginSignup;
