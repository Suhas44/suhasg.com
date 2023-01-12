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
import { useMediaQuery } from 'react-responsive'


const Homepage = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "#f7f6f0"
  });

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1284px)' })

  const imgStyle = isTabletOrMobile ? { marginLeft: 30, marginRight: 40, width: 100, height: 100 } : { marginRight: 40, width: 120, height: 120 };
  const bigImgStyle = isTabletOrMobile ? { float: "left", marginLeft: 20, width: 350, height: 466 } : { float: "left", marginLeft: 210, marginRight: 200, width: 425, height: 566 };
  const emailStyle = isTabletOrMobile ? { marginLeft: 20, width: 120, height: 84 } : { width: 171, height: 120 };
  const headerStyle = isTabletOrMobile ? { marginLeft: 20, fontWeight: 400 } : { fontWeight: 400 };
  const pStyle = isTabletOrMobile ? { marginLeft: 20 } : {};

  return (
    <div>
      <Navbar />
      <div>
        <Image style={bigImgStyle} src={me} />
        <div>
          <EmbeddedP fontSize={80} style={headerStyle}>Hi, I'm Suhas!</EmbeddedP>
          <br></br>
          <EmbeddedP fontSize={30} style={pStyle}> I'm a developer at <EmbeddedLink href="https://www.axofoods.com/">Axo</EmbeddedLink> and <EmbeddedLink href="https://github.com/TexasTorque"> Texas Torque</EmbeddedLink>.</EmbeddedP>
          <EmbeddedP fontSize={21} style={pStyle}> You can view my resume <EmbeddedLink href="https://docs.google.com/document/d/1WRE8Hg0ewvzPIbuAlGt43oGCPSt02FQgpvzbeLIybh4/edit?usp=sharing">here</EmbeddedLink>.</EmbeddedP>
          <EmbeddedP fontSize={21} style={pStyle}>Feel free to reach out to me on the following platforms or email <EmbeddedLink href="mailto:suhas8@outlook.com">suhas8@outlook.com</EmbeddedLink>.</EmbeddedP>
          <br /><br />
          <Image style={imgStyle} src={linkedin} href="https://www.linkedin.com/in/suhas-guddeti-1b45a7247/" />
          <Image style={imgStyle} src={github} href="https://github.com/Suhas44/" />
          <Image style={imgStyle} src={instagram} href="https://www.instagram.com/suhas.guddeti/" />
          <Image style={emailStyle} src={email} href="mailto:suhas8@outlook.com" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;