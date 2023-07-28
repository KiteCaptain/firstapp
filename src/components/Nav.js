import React from 'react';
import logo1 from '../images/logo1.png'; // Adjust the path based on your file structure

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">
        <img className="img-fluid" src={logo1} alt="Little Lemon Logo" />
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Reservations
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Order Online
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
