import { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Details:", formData);
    alert("Your appointment has been booked!");
    // Later → send formData to your backend API
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Full Name
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Select Date
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          Select Time
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>

        <label>
          Service Needed
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">-- Select Service --</option>
            <option value="diagnostic">Car Diagnostic</option>
            <option value="repair">Repair Service</option>
            <option value="maintenance">Maintenance Check</option>
          </select>
        </label>

        <button type="submit" className="book-btn">Book Appointment</button>
      </form>
    </div>
  );
}

export default Appointment;