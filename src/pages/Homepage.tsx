import React, { useLayoutEffect } from 'react';
import Navbar from '../components/Navbar';
import me from '../pics/me.jpg';
import email from '../pics/email.png';
import github from '../pics/github.png';
import linkedin from '../pics/linkedin.png';
import instagram from '../pics/instagram.png';


const Homepage = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#f7f6f0"
  });
  const aStyle = {textDecoration: 'none'};
  const imgStyle = {marginRight: "40px", width: "120px", height: "120px"};
  const imgRedirect = (url: string) => {
    window.open(url, "_blank");
  }
  return (
    <div>
      <Navbar />
      <div>
        <p style={{float: "left"}}>
          <img style={{marginLeft: "210px", marginRight: "200px"}} width={425} height={566} src={me} alt="ME"></img>
        </p>
        <div>
          <h1 style={{fontSize: "80px"}}>Hi, I'm Suhas!</h1> <br></br>
          <p style={{fontSize: "30px"}}>I'm a developer at <a style={aStyle} href="https://www.axofoods.com/"> Axo</a>, <a style={aStyle} href="https://github.com/TexasTorque">Texas Torque</a>, and <a style={aStyle} href="https://github.com/extendable-co">Extendable</a>.</p>
          <p style={{fontSize: "17px"}}> You can view my resume <a style={aStyle} href="https://docs.google.com/document/d/1WRE8Hg0ewvzPIbuAlGt43oGCPSt02FQgpvzbeLIybh4/edit?usp=sharing">here</a>.</p>
          <p style={{fontSize: "17px"}}>Feel free to reach out to me on the following platforms or email <a style={aStyle} href={"mailto:suhas8@outlook.com"}>suhas8@outlook.com</a>.</p> <br/><br/>
            <img style={imgStyle} src={linkedin} alt="LinkedIn" onClick={() => imgRedirect("https://www.linkedin.com/in/suhas-guddeti-1b45a7247/")}></img>
            <img style={imgStyle} src={github} alt="GitHub" onClick={() => imgRedirect("https://github.com/Suhas44/")}></img>
            <img style={imgStyle} src={instagram} alt="Instagram" onClick={() => imgRedirect("https://www.instagram.com/suhas.guddeti/")} ></img>
            <a href="mailto:suhas8@outlook.com"><img width={171} height={120} src={email} alt="Email"></img></a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;