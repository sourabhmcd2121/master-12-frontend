import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaLock, FaUser } from "react-icons/fa";

import '../assets1/css/Login.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login validation
    if (username === 'user' && password === 'pass') {
      // alert('Login successful!');
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (

    <div className="login-container  ">
      <form className='logform' onSubmit={handleLogin}>
        <img src='./logo.png' width={90} alt='logo' />
        <h2 className="aniheader" title="Municipal Corporation of Delhi">MCD MASTER</h2>
        <p className='colar m-0'>Sign in to start your session</p>
        <h3>Login</h3>
        <div className="input-container">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
          <span className="icon"><FaUser /></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <span className="icon"><FaLock /></span>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className=' mt-4' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
