import React from "react";
import { Link } from "react-router-dom";
//import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">AutoScan</h1>
      <ul className="nav-links">
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/diagnostics">Diagnostics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <Link to="/appointment" className="cta-btn">Book Appointment</Link>

      </ul>
    </nav>
  );
}

export default Navbar;
