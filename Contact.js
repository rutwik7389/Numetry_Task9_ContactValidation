import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      formValid = false;
      newErrors.name = "Name is required.";
    }

    if (!validateEmail(formData.email)) {
      formValid = false;
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.message.trim()) {
      formValid = false;
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);

    if (formValid) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form

      // Redirect to Home after 2 seconds
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      {submitted && <p className="text-success">Message sent successfully! Redirecting...</p>}
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <small className="text-danger">{errors.message}</small>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
