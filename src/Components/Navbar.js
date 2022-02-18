import React, { useState } from "react";
import {  NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false); 

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
        Sh@Es
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/"
             activeclassName="active" id="nav-links"
             onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" 
            activeclassName="active" id="nav-links"
            onClick={handleClick}>
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pricing" 
            activeclassName="active" id="nav-links"
            onClick={handleClick}>
              Pricing
            </NavLink>
          </li>
          
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

