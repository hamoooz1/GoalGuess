import React, { useState } from 'react';
import axios from 'axios';
import '../styles/modals.scss';

const Signup = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('/api/signup', { email, username, password });
      closeModal();
    } catch (error) {
      console.error('Signup failed', error);
      setError('Signup failed. Please check your information and try again.');
    }
  };

  return (
    <div className="signup modal">
      <div className="modal-content">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Sign Up</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;