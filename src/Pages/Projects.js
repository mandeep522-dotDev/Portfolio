import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://res.cloudinary.com/dnnqvgqjo/image/upload/v1770636364/gym_sdlvfp.png"
              title="Gym Manager"
              description="Backend Infrastructure: Built a robust server-side using Node.js and Express.js, 
              implementing MVC architecture for clean code separation and scalability.  
              Authentication: Developed secure user authentication using JSON Web Tokens (JWT) 
              and password hashing with Bcrypt.js.  
              Database Management: Designed and implemented Mongoose schemas for Users and 
              Admins, ensuring data integrity and efficient querying in MongoDB. 
              Frontend Development: Created a dynamic user interface with React.js, utilizing React 
              Hooks (useState, useEffect) for state management. 
              UI/UX: Utilized Tailwind CSS to build a modern, mobile-responsive layout, focusing on 
              high-performance rendering. 
              API Testing: Verified and documented all endpoints using Postman, ensuring seamless 
              communication between the UI and server. 
"              link="https://github.com/mandeep522-dotDev/GymManager"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://res.cloudinary.com/dnnqvgqjo/image/upload/v1770636317/coffee_uugrbt.png"
              title="Coffee Website"
              description="This coffee website is a modern and interactive web application built using React.js with the goal of delivering a smooth and engaging user experience. The website is designed for coffee lovers who appreciate quality, simplicity, and a visually appealing interface. From browsing different coffee varieties to exploring our story, every section is carefully crafted to feel fast, responsive, and user-friendly."
              link="https://github.com/mandeep522-dotDev/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://res.cloudinary.com/dnnqvgqjo/image/upload/v1770636378/weather_cve3gz.png"
              title="Weather-clone"
              description="This weather website is a dynamic and responsive web application built using React.js. It provides real-time weather information such as temperature, humidity, wind speed, and weather conditions for different locations. The application uses modern React features like components and hooks to manage state and handle API data efficiently."              link="https://github.com/mandeep522-dotDev/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
