import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="header">
      <div className="intro">
        <h1>Harikeerthana Chedurupally</h1>
        <h2>Front-End Developer</h2>
        <p>
        I'm a passionate Front-End Developer with 3 years of experience building responsive, 
        user-friendly websites and web applications. I specialize in HTML, CSS, Bootstrap, 
        JavaScript, jQuery, and React, and I enjoy turning complex problems into elegant, 
        functional designs. I focus on delivering clean, maintainable code and crafting seamless 
        user experiences across devices.</p>
        <p>
        I love collaborating with teams, learning new technologies, and continuously 
        improving my skills to stay current with front-end trends and best practices. 
        Whether it's building landing pages, dynamic interfaces, or integrating with APIs, 
        I take pride in developing solutions that make a difference.
        Want to know how I may help your project? Check
          out my project <a href="#">portfolio</a> and
          <a href="#"> online resume</a>.
        </p>
        <div className="buttons">
          <button className="btn green">View Portfolio</button>
          <button className="btn dark">View Resume</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/profile.jpg" alt="Simon" />
      </div>
    </section>
  );
}

export default Header;
