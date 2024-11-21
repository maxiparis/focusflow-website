// Navbar.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      {/* Changed to navbar-dark for dark background */}
      <div className="container-fluid">
        {/* Logo and Brand Name */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src="logoSemiRounded.png"
            alt="FocusFlow Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold">FocusFlow</span>
        </a>
        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            {/* Other nav items */}
            <li className="nav-item">
              <a className="nav-link" href="#demo">
                Demo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
            {/*/!* CTA Button *!/*/}
            {/*<li className="nav-item ms-lg-3">*/}
            {/*  <a className="btn btn-primary" href="#get-started">*/}
            {/*    Get Started*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
