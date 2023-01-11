import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NB = () => {
  const linkStyle = { paddingRight: "50px", fontSize: "20px" };
  return (
    <div>
      <Navbar style={{ marginBottom: "50px" }} bg="dark" variant="dark">
        <Container fluid>
          <Nav className="ms-auto" style={{ height: '50px' }}>
            <Nav.Link style={linkStyle} href="/">Home</Nav.Link>
            <Nav.Link style={linkStyle} href="/projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NB;