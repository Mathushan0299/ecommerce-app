import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Enjoy your shopping!</h1>
      
      
      <div className="home-links">
        <Link to="/login" className="home-btn">Login</Link>
        <Link to="/register" className="home-btn">Register</Link>
      </div>
    </div>
  );
};

export default Home;
