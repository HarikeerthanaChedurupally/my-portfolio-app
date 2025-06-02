
import "./Resume.css";
import resumePDF from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="resume-container">
      <h2 className="resume-title">Online Resume</h2>
      <a href={resumePDF} download className="download-btn">
        📄 Download PDF Version
      </a>
      <div className="resume-preview">
        <iframe
          src={resumePDF}
          title="My Resume"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
