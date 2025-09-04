import React from "react";
import { Link } from "react-router-dom"; // import Link
//import "../assets/customers/porsche.jpeg";

function Hero() {
  return (
    <section className="hero">
      <h1>Smart Car Diagnostics Made Simple 🚘</h1>
      <p>Book an appointment online and get your car checked by professionals.</p>

      {/* Use Link instead of button for navigation */}
      <Link to="/appointment" className="cta-btn">
        Book your appointment
      </Link>
    </section>
  );
}

export default Hero;
