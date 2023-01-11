import { useLayoutEffect } from 'react';
import Navbar from '../components/Navbar';
import EmbeddedP from '../components/EmbeddedP';
import EmbeddedLink from '../components/EmbeddedLink';
import Image from '../components/Image';
import me from '../pics/me.jpg';
import email from '../pics/email.png';
import github from '../pics/github.png';
import linkedin from '../pics/linkedin.png';
import instagram from '../pics/instagram.png';


const Homepage = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#f7f6f0"
  });

  const imgStyle = { marginRight: "40px", width: "120px", height: "120px" };

  return (
    <div>
      <Navbar />
      <div>
        <p style={{ float: "left" }}>
          <Image style={{ marginLeft: 210, marginRight: 200, width: 425, height: 566 }} src={me} />
        </p>
        <div>
          <h1 style={{ fontSize: "80px" }}>Hi, I'm Suhas!</h1>
          <br></br>
          <EmbeddedP fontSize={30}> I'm a developer at <EmbeddedLink href="https://www.axofoods.com/">Axo</EmbeddedLink> and <EmbeddedLink href="https://github.com/TexasTorque"> Texas Torque</EmbeddedLink>.</EmbeddedP>
          <EmbeddedP fontSize={17}> You can view my resume <EmbeddedLink href="https://docs.google.com/document/d/1WRE8Hg0ewvzPIbuAlGt43oGCPSt02FQgpvzbeLIybh4/edit?usp=sharing">here</EmbeddedLink>.</EmbeddedP>
          <EmbeddedP fontSize={17}>Feel free to reach out to me on the following platforms or email <EmbeddedLink href="mailto:suhas8@outlook.com">suhas8@outlook.com</EmbeddedLink>.</EmbeddedP>
          <br /><br />
          <Image style={imgStyle} src={linkedin} href="https://www.linkedin.com/in/suhas-guddeti-1b45a7247/" />
          <Image style={imgStyle} src={github} href="https://github.com/Suhas44/" />
          <Image style={imgStyle} src={instagram} href="https://www.instagram.com/suhas.guddeti/" />
          <Image style={{ width: 171, height: 120 }} src={email} href="mailto:suhas8@outlook.com" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;