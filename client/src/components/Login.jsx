import React, { useState } from 'react';
// import { usernameValidate } from '../helper/Validate.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
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
            <p>Email: {loginResult.email}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
