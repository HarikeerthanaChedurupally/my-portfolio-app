import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Harikeerthana Chedurupally</h2>
      <img src="/profile.jpg" alt="Simon Doe" className="profile-img" />
      <p>Hi, my name is Harikeerthana and I'm a Front-End Developer.</p>

      <div className="social-icons">
        <a href="#"><i className="fab fa-xing"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fas fa-globe"></i></a>
      </div>

      <nav className="nav-links">
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button className="hire-button">Hire Me</button>
    </aside>
  );
}

export default Sidebar;
