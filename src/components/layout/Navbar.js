import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Muses Logo" width="130px" height="auto"/>
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/calculate">Calculate</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

