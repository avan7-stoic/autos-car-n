import React from "react";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {
  return (
   <>
    <Navbar />
      <AboutUs />
      {/* <Services /> */}
      {/* <Testimonials /> */}
    <Footer />
    </>
  );
}

export default HomePage;
