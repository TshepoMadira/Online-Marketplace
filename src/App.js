import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/home';
import ProductForm from './components/productform';
import ProductList from './components/Productlist';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Navbar';



const App = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
        <Route path='/productform' element={<ProductForm />} />
        <Route path='/productlist' element={<ProductList />} />  
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
     
      </Routes>
    </Router>
  );
};

export default App;
