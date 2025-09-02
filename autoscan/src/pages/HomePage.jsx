import React from "react";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Import image
import CarBanner from "../assets/services/engine.jpg";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* ✅ Add image */}
      <div className="hero-section">
        <img src={CarBanner} alt="Car Diagnostic Banner" className="hero-image" />
      </div>

      <AboutUs />
      {/* <Services /> */}
      {/* <Testimonials /> */}

      <Footer />
    </>
  );
}

export default HomePage;
