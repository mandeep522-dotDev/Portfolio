import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">Mandeep </span>
            I am a Fresh Graduate Engineer from <span className="purple"> Kurukshetra, India.</span>
            <br />
            
            <br />I have completed Master's degree in Computer Application from Kurukshetra University, kurukshetra 2023-2025<br /> <br />
           <br />
            
            ⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CN etc.
            <br />
           <br />
            <br />
            ⚡ Apart from this, I have done diploma on Fundamentels of Programing and Full Stack Development .
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;