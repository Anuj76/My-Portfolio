import {
  FaGithub,
  FaHackerrank,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyle.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </h4>
            <div>
              <p>Indore, Madhya Pradesh</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              7692079407
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              anujjane@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Follow me on social media</h4>
          <div className="social">
            <a href="https://www.linkedin.com/in/anuj76/" className="linkdin">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/Anuj76" className="git">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://leetcode.com/_anuj_jain_/" className="hackerrank">
              <FaHackerrank
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="outer-footer">
        Copyrigth &copy; 2023. All Rights Reversed.
      </div>
    </div>
  );
};

export default Footer;
