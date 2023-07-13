import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="I'm a friendly Front-end Devloper" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
