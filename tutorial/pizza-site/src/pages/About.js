import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';

import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          We just wanna make good pizza. That's what we want for sure. Best
          Pizza you ever had I can tell for sure. Are you hungry? Come on have
          some Pedro!! A common thing you can hear in our little town. Cause we
          have tegridy!! Tegridy tegridy tegridy. Local pizza from local
          ingredients just for you.
        </p>
      </div>
    </div>
  );
}

export default About;
