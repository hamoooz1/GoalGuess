import React, { useState } from 'react';
import axios from 'axios';
import '../styles/modals.scss';

const Login = ({ closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('/api/login', { username, password });
      closeModal();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login modal">
      <div className="modal-content">
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;