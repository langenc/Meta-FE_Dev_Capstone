import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';
import Logo from "../assets/logo.png";

function Nav() {
  return (
    <nav className="nav">
      <img src={Logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/order-online">Order online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;