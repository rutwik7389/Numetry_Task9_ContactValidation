import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page after a successful login.</p>
      
      {/* Contact Us Button */}
      <Link to="/contact" className="btn btn-secondary mt-3">Contact Us</Link>
    </div>
  );
};

export default Home;
