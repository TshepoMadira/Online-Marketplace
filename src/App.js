import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/home'; 
import Productform from './components/productform'; 
import Productlist from './components/Productlist';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Navbar';
import Paypal from './components/Paypal';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route 
          path="/" 
          element={<Home searchQuery={searchQuery} onSearch={handleSearch} />} 
        />
        <Route 
          path="/productlist" 
          element={<Productlist searchQuery={searchQuery} />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/productform' element={<Productform />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path='paypal' element={<Paypal />} />
      </Routes>
    </Router>
  );
};

export default App;
