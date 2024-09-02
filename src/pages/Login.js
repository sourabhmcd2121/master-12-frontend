// import React from 'react'
// import { useState } from 'react';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Example authentication logic
//     if (email === 'user@example.com' && password === 'password123') {
//       alert('Login successful!');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
 //   import { useNavigate } from 'react-router-dom';


import { FaLock, FaUser } from "react-icons/fa";


import '../css/Login.css';
//import AppRouter from './AppRouter';



const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Example authentication logic
    if (username === 'user' && password === 'user') {
 
      
      alert('Login successful!');


    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src='./logo.png' width={90} alt='logo' /><hr />

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
        <div className="options">
          {/* <label>
            <input type="checkbox" /> Remember me
          </label> */}
          {/* <a href="#">Forgot password?</a> */}
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className=' mt-4' type="submit" >Login</button>
        <p>
          {/* Don't have an account? <a href="#">Register</a> */}
        </p>
      </form>

    </div>
  );
};

export default Login;




