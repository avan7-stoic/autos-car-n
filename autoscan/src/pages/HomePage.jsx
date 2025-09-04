import React from "react";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css"; // custom CSS

// ✅ Import image
import CarBanner from "../assets/customers/porsche.jpeg";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* ✅ Hero with overlay */}
      <div className="hero-overlay" style={{ backgroundImage: `url(${CarBanner})` }}>
        <div className="overlay-content">
          <h1>Smart Car Diagnostics Made Simple 🚘</h1>
          <p>Book an appointment online and get your car checked by professionals.</p>
        </div>
      </div>

      <AboutUs />
      {/* <Services /> */}
      {/* <Testimonials /> */}

      <Footer />
    </>
  );
}

export default HomePage;
