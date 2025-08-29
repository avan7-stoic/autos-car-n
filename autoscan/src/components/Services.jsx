import React from "react";
//import "../styles/global.css";
import diagnosticsImg from "../assets/services/diagnostics.jpg";
import engineImg from "../assets/services/engine.jpg";
import brakesImg from "../assets/services/brakes.jpg";
import oilImg from "../assets/services/oil.jpg";

function Services() {
  const services = [
    {
      title: "Diagnostics",
      description: "Full system scan using OBD-II tools to detect hidden issues.",
      image: require("../assets/services/diagnostics.jpg"),
    },
    {
      title: "Engine Check",
      description: "Identify engine problems early and keep your car running smoothly.",
      image: require("../assets/services/engine.jpg"),
    },
    {
      title: "Brake System",
      description: "Ensure your brakes are safe and responsive with our expert checks.",
      image: require("../assets/services/brakes.jpg"),
    },
    {
      title: "Oil & Maintenance",
      description: "Regular oil changes and preventive maintenance to extend car life.",
      image: require("../assets/services/oil.jpg"),
    },
  ];

  return (
    <section className="services">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.image} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Services;
