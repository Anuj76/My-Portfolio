import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import img1 from "../assets/images.jpg";
import img2 from "../assets/Benefits-of-ReactJS.jpg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1 className="who">Who Am I?</h1>
        <p>
          I'm a Software Developer and a passionate programmer who loves solving
          challenges that shape industries. I have working experience with
          Backend technologies in building REST APIs.I have an immense interest
          in web development and am eager to contribute to open source. I love
          to work with people who are passionate about building solutions.
        </p>
        <div className="personalInfo">
          <div>
            <span>Name:</span>
            <span>Anuj Jain</span>
          </div>
          <div>
            <span>Age:</span>
            <span>21</span>
          </div>
          <div>
            <span>Email:</span>
            <span>anujjane@gmail.com</span>
          </div>
          <div>
            <span>University:</span>
            <span>IES IPS Academy</span>
          </div>
          <div>
            <span>Nationality:</span>
            <span>India</span>
          </div>
        </div>
        <Link to="/contact">
          <button className="cntbtn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img1} className="img" alt="loading"></img>
          </div>
          <div className="img-stack bottom">
            <img src={img2} className="img" alt="loading"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
