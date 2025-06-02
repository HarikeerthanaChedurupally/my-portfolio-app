import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "HTML,CSS,SCSS,BOOTSTRAP", icon: "fab fa-node" },
    { name: "Python & Django", icon: "fab fa-python" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>What I do</h2>
      <p>
      As a front-end developer with 3 years of hands-on experience, I bring designs to life by building responsive and interactive web interfaces. My work focuses on delivering seamless 
      user experiences using technologies like HTML, CSS, Bootstrap, JavaScript, jQuery, and React.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={`${skill.icon} skill-icon`}></i>
            <h3>{skill.name}</h3>
            <p>
              
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
