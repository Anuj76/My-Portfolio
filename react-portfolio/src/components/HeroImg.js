import React from "react";
import "./HeroImgStyle.css";
import introImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={introImg} alt="IntroImage" />
      </div>
      <div className="content">
        <p>Hi, I'M Anuj Jain</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
