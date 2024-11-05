import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <Link to="/" className="navbar-brand">Tim.Co</Link>

        
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-btn">
            <i className="fa fa-search"></i> 
          </button>
        </div>

      
        <div className="user-container">
          <button className="login-btn" onClick={handleLoginLogout}>
            <i className={`fa fa-${isLoggedIn ? 'user' : 'sign-in'} user-icon`}></i>
            {isLoggedIn ? 'Welcome' : 'Login/Register'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
