import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NavBar = ({ onSearch }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();  

  const handleLoginLogoutClick = () => {
    if (isLoggedIn) {
     
      navigate('/profile'); 
    } else {

      navigate('/login');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Tim.Co</Link>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}  
          />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="user-container">
          <button className="login-btn" onClick={handleLoginLogoutClick}>
            {isLoggedIn ? (
              <span>Welcome</span>  
            ) : (
              <span>Login/Register</span>  
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
