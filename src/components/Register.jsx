import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './Register.css'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      if (!email || !password) {
        throw new Error('Please fill in both email and password');
      }

      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      
      const user = userCredential.user;
      await setDoc(doc(firestore, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

   
      navigate('/login');
    } catch (err) {
    
      console.error("Registration Error:", err);
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-controll"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-controll"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
