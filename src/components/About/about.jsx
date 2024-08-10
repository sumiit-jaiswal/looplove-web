import React from "react";
import "./about.scss";
import snehaImage from "../../assets/sneha-photo.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="section-image">
          <img src={snehaImage} alt="Sneha Bist" />
          <span className="img-data">
            Sneha Singh (CEO & Co-founder of LoopLove)
          </span>
        </div>
        <div className="section-content">
          <h2>About Sneha Bist</h2>
          <p>
            Sneha Bist, the co-founder of LoopLove, is a passionate advocate for
            women empowerment. With a deep commitment to creating a positive
            impact, she believes in fostering an inclusive environment where
            women can thrive and achieve their full potential.
          </p>
        </div>
      </div>

      {/* <div className="section">
        <div className="section-image">
          <img src={sumitImage} alt="Sumit Jaiswal" />
          <span className="img-data">Sumit Jaiswal (Co-founder of LoopLove)</span>
        </div>
        <div className="section-content">
          <h2>About Sumit Jaiswal</h2>
          <p>
            Sumit Jaiswal, the financial and operational mastermind behind LoopLove, brings
            a wealth of experience to the business. With his strategic vision and meticulous
            approach, Sumit ensures the smooth functioning of the company's finances and operations.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
