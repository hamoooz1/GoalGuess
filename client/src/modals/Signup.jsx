import React, { useState } from 'react';
import axios from 'axios';
import '../styles/modals.scss';

const Signup = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('/signup', { email, name, password });
      closeModal();
    } catch (error) {
      console.error('Signup failed', error);
      setError('Signup failed! Please retry');
    }
  };

  return (
    <div className="signup modal">
      <div className="modal-content">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Sign Up</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;