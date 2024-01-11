import React, { useState } from 'react';
import axios from 'axios';
import '../styles/modals.scss';

const Login = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('/login', { email, password });
      closeModal();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login modal">
      <div className="modal-content">
        <h1>Login</h1>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;