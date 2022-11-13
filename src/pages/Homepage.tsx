import React from 'react';
import Navbar from '../components/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div>
      <h1>Hi, I'm Suhas!</h1> 
      <p>I'm a developer at Axo, Texas Torque, and Extendable.</p>

      <p>Feel free to reach out to me on the following platforms:</p>
        <ul>
            <li><a href="
https://www.linkedin.com/in/suhas-guddeti-1b45a7247/">LinkedIn</a></li>
            <li>
                <a href={"mailto:suhas8@outlook.com"}>Email</a>
            </li>
            <li><a href="
                https://github.com/Suhas44">GitHub</a></li>
            <li><a href="
                https://www.instagram.com/suhas.guddeti/">Instagram</a></li>
        </ul>
      </div>

    </div>
  );
};

export default Homepage;