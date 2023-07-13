import React from "react";
import html from "../assets/htmlimages.png";
import css from "../assets/css.png";
import DSAImg from "../assets/DSA.jpg";
import reactImg from "../assets/react.png";
import java from "../assets/java.png";
import javaScript from "../assets/JavaScript.png";
import mySql from "../assets/sql.png";
import spring from "../assets/spring.png";
import mongoDB from "../assets/mongo.jpg";
import c from "../assets/c.jpg";
import node from "../assets/NodeJs.jpg";
import j2ee from "../assets/J2ee.png";
import "./SkillsContentStyles.css";
const SkillsContent = () => {
  return (
    <div className="inner">
      <div className="header-skill">
        <h1>My Skills</h1>
      </div>
      <div className="container">
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={reactImg} alt="react" className="skill-icon"></img>
            </div>
            <h3>React</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img
                src={javaScript}
                alt="JavaScript"
                className="skill-icon"
              ></img>
            </div>
            <h3>JavaScript</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={css} alt="css" className="skill-icon"></img>
            </div>
            <h3>Css 3</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={html} alt="html" className="skill-icon"></img>
            </div>
            <h3>HTML 5</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={node} alt="node" className="skill-icon"></img>
            </div>
            <h3>NodeJS</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={mongoDB} alt="mongoDB" className="skill-icon"></img>
            </div>
            <h3>MongoDB</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={java} alt="java" className="skill-icon"></img>
            </div>
            <h3>Java</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={j2ee} alt="j2EE" className="skill-icon"></img>
            </div>
            <h3>J2EE</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={spring} alt="springboot" className="skill-icon"></img>
            </div>
            <h3>SpringBoot</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={mySql} alt="mysql" className="skill-icon"></img>
            </div>
            <h3>MySQL</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={c} alt="c++" className="skill-icon"></img>
            </div>
            <h3>C/C++</h3>
          </div>
          <p></p>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="images">
              <img src={DSAImg} alt="dsa" className="skill-icon"></img>
            </div>
            <h3>Data Structure and Algorithm</h3>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
