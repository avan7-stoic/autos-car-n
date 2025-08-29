import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
    <Navbar />
      <Hero />
      {/* <Services /> */}
      <Footer />  
    </>
  );
}

export default LandingPage;
