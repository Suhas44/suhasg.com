import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'

const NB = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1284px)' })
  const linkStyle = isTabletOrMobile ? { paddingLeft: "30px", paddingRight: "50px", fontSize: "20px" } : { paddingRight: "50px", fontSize: "20px" };
  return (
    <div>
      <Navbar style={{ marginBottom: "50px" }} bg="dark" variant="dark">
        <Container fluid>
          <Nav className={isTabletOrMobile ? "m-auto" : "ms-auto"} style={{ height: '50px' }}>
            <Nav.Link style={linkStyle} href="/">Home</Nav.Link>
            <Nav.Link style={linkStyle} href="/projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NB;