// Navbar.js
import React from 'react';
import './css/Navbar.css';
// import SearchBar from './SearchBar.js';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Wrap the img element in a Link */}
        <Link to="/">
          <img src={logo} className="logo" alt="name" />
        </Link>
        {/* <SearchBar /> */}
        <ul className="nav-links">
          <li><a href="/">About Us</a></li>
          <li><a href="/explore">Explore</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
