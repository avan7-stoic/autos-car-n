import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import DiagnosticsPage from "./pages/DiagnosticsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="./pages/LandingPage" element={<LandingPage />} />
        <Route path="./pages/HomePage" element={<HomePage />} />
        <Route path="./pages/DiagnosticsPage" element={<DiagnosticsPage />} />
        <Route path="./pages/ContactPage" element={<ContactPage />} />
        <Route path="./components/Navbar" element={<Navbar />} />
        <Route path="./components/Footer" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
