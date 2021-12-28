import './Navbar.css';

import React from 'react';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        RestFood
      </Link>
      <ul className="navbar-nav">
        <li
          className={
            pathname.includes('login') ? 'nav-item active' : 'nav-item'
          }
        >
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li
          className={
            pathname.includes('register') ? 'nav-item active' : 'nav-item'
          }
        >
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
