// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Home icon from react-icons
import { FaUserCircle } from 'react-icons/fa'; // Profile icon from react-icons
import './Navbar.css';
import Logo from '../assets/Logo.png'; // Correct path to Logo

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Home icon that navigates to the landing page */}
        <Link to="/admin-dashboard" className="home-icon">
          <FaHome size={30} />
        </Link>
      </div>

      <div className="navbar-center">
        {/* Logo at the center */}
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-right">
        {/* Profile icon that navigates to the profile page */}
        <Link to="/profile" className="profile-icon-link">
          <FaUserCircle size={40} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
