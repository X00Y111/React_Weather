import React from 'react';
import tomcat from './TomCat.png'
import './AboutMe.css';

const AboutMe = () => {
  
  return (
    <div className="about-me-container">
      <img src={tomcat} alt="Tom Cat" className="profile-image" />
      <h1>Hi, I'm Shanli</h1>
      <p>I'm a student from SMU's MCDA program.</p>
      <p>I joined the program because I love programming.</p>
    </div>
  );
};

export default AboutMe;