import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

const AuthPage = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default AuthPage;
