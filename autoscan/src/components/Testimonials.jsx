import React from "react";
//import "../styles/global.css";

function Testimonials() {
  const reviews = [
    {
      name: "John M.",
      text: "AutoScan saved me from a costly repair by detecting a transmission issue early!",
      image: require("../assets/customer1.jpg"),
    },
    {
      name: "Sarah K.",
      text: "Super quick and professional service. Booking online was so convenient.",
      image: require("../assets/customer2.jpg"),
    },
    {
      name: "James W.",
      text: "I trust AutoScan with all my diagnostics. They explain everything clearly.",
      image: require("../assets/customer3.jpg"),
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      {reviews.map((review, index) => (
        <div className="testimonial" key={index}>
          <img src={review.image} alt={review.name} />
          <div>
            <p>"{review.text}"</p>
            <strong>- {review.name}</strong>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;
