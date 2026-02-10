import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../Assets/resume.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import "../styles/resume.css"

function Resume() {
  return (
    <Container fluid className="resume-section">
      <div className="resume">
        {/* HEADER */}
        <div className="header">
          <div className="profile-pic">
            <img src="https://media.licdn.com/dms/image/v2/D5635AQFD_99x8KlpEQ/profile-framedphoto-shrink_800_800/B56ZwfNBvSK4Ag-/0/1770050034922?e=1771239600&v=beta&t=01hgUeZ2-YixbJcsvZO6roMDIsaz5MedN0oS9lZIgWU" alt="profile" />
          </div>

          <div className="header-text">
            <h1>MANDEEP</h1>
            <h2>FULL STACK DEVELOPER</h2>

            <p className="summary">
              Detail-oriented MCA student and aspiring MERN Stack Developer with a strong foundation in 
              building full-stack web applications. Proven ability to develop REST APIs, manage NoSQL 
              databases, and create responsive user interfaces. Seeking to contribute to an innovative tech 
              team while further honing skills in scalable software architecture. 
            </p>

            <div className="contact">
              <span>📞 +91 72068-59892</span>
              <span>📍 Kurukshetra, Haryana</span>
              <span>📧 mandy.kangar@gmail.com</span>
              <span>🔗 @mandeepkashyap</span>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="content">
          <div className="left">
            <h3>WORK EXPERIENCE</h3>
            <p className="title">Intern in Code Quotient</p>
            <p className="present">• Present</p>

            <ul>
              <li>React.js, Next.js</li>
              <li>Node.js, Express</li>
              <li>MongoDB, SQL, Firebase</li>
              <li>MVC Architecture (ODM, ORM)</li>
              <li>VPS Dedicated Hosting</li>
            </ul>

            <h4 className="present">Tools I Use</h4>
            <ul className="tools">
              <li>Git</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Github</li>
              <li>Netlify</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="right">
            <h3>EDUCATION BACKGROUND</h3>
            <p style={{color: "#01fbff", fontSize: "25px"}}>
              <strong>Kurukshetra University, Kurukshetra</strong>
            </p>
            <p style={{color: "gray", fontSize: "18px"}}>MCA Computer Application</p>

            <p style={{color: "#01fbff", fontSize: "25px"}}>
              <strong>Guru Nanak Khalsa College, Karnal</strong>
            </p>
            <p style={{color: "gray", fontSize: "18px"}}>Post Graduate Diploma in Computer Application (PGDCA)</p>

            <h3>ACCOMPLISHMENTS</h3>
            <ul style={{color: "gray", fontSize: "15px"}}>
              <li>I have Studied core Computer Application subjects: DS, DBMS, OS, CN, SE</li>
              <li>Completed courses in Full-Stack, Web Development & MERN Technologys</li>
            </ul>
          </div>
        </div>

        {/* ABOUT */}
        <div className="about">
          <h3>ABOUT</h3>
          <p style={{color: "black", fontSize: "15px"}}>
            A well passionate self-taught Web Developer who chose career to be a
            software engineer. Interested in coding and enthusiastic about
            learning latest technologies. Strong problem solving and analytical
            skills.
          </p>

          <p className="links">
            <strong style={{color: "#01fbff", fontSize: "20px"}}>My Portfolio Website:</strong>{" "}
            <a href="https://mandeepdev.com">mandeepdev.com</a>
          </p>

          <p className="links">
            <strong style={{color: "#01fbff", fontSize: "20px"}}>Open Source Contribution:</strong>{" "}
            <a href="https://github.com/mandeep522-dotDev/">
              github.com/mandeep522-dotDev
            </a>
          </p>
        </div>
      </div>
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
