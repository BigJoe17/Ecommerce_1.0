import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/CSS/LoginSignup.css';
import './Signup/Signup.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                // Redirect to the home page or any other route after successful login
                navigate('/');
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred, please try again');
        }
    };

    return (
        <>
            <div className='loginsignup'>
                <div className='loginsignup-container'>
                    <h1>Log In</h1>
                    <div className='loginsignup-fields'>
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
                    </div>
                    <button className='btn' onClick={handleLogin}>Log In</button>
                    
                    <Link to="/signup">
                        <p className='loginsignup-login'>Don't have an account?<span>Sign Up</span></p>
                    </Link>
                    <div className='loginsignup-agree'>
                        <input type="checkbox" name="" id="" />
                        <p>By continuing, I agree to the terms & privacy policy</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
