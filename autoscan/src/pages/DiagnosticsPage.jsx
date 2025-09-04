import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import "../styles/services.css";


function DiagnosticsPage() {
  return (
     <>
     <Navbar/>
    <section className="diagnostics">
      <h2>Car Diagnostics</h2>
      <p>
        Car diagnostics identifies issues in your car before they become costly problems.
        We use advanced OBD-II tools and expert inspection.
      </p>
      <h3>How It Works</h3>
      <ol>
        <li>Plugging into OBD-II</li>
        <li>Reading error codes</li>
        <li>Analyzing data</li>
        <li>Report & Recommendations</li>
      </ol>
      <h3>What We Check</h3>
      <ul>
        <li>Engine Performance</li>
        <li>Transmission Health</li>
        <li>Brake System</li>
        <li>Airbags & ABS</li>
        <li>Emissions & Sensors</li>
      </ul>
      <Link to = "/appointment" className='cta-btn'>BOOK YOUR DIAGNOSTICS APPOINTMENT</Link>
    </section>
    <Footer/>
    </>
  );
}

export default DiagnosticsPage;
