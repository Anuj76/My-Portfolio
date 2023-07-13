import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import SkillsContent from "../components/SkillsContent";
const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Skills" text="Technical skills" />
      <SkillsContent />
      <Footer />
    </div>
  );
};

export default Skills;
