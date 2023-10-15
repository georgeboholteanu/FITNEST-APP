import React, { useState } from 'react';
import {Navigate, useNavigate } from 'react-router-dom';
// import { usernameValidate } from '../helper/Validate.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState(null);
  const [user, setUser] = useState(null)
  const navigate = useNavigate ();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.json();
        setLoginResult(result);
        console.log(result.message);

        // Store the user information in your application state
        setUser(result.user);
        console.log(result.user);

        navigate('/userprofile');
        <Navigate to="/userprofile" />;

      } else if (response.status === 401) {
        // Handle 401 (Unauthorized) error
        const errorData = await response.json();
        console.error(errorData.message);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {loginResult && (
        <div>
          <h2>Login Result</h2>
          {loginResult.error ? (
            <p>{loginResult.error}</p>
          ) : (
            <p>Logging in: {user.email}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
