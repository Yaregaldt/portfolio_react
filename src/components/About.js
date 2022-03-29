import React from 'react';
import pic from '../assets/images/pic.png'


function About() {
    return (
      <section className="sub-section" id="about-me">
      <div class="information">
          <h2>About Me</h2>
          <p>Hi! I'm Yaregal. I am highly-motivated, self-driven, and hard-working that is constantly seeking to improve my technical skillset. I work with front-end and back-end web development tools.</p>
          
      </div>
      <div class="headshot-container">
          <img class="headshot" src={pic} alt="avator"/>
      </div>
      </section>
    );
  }




export default About;