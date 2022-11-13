import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NB = () => {
    return (
      <div>
        <Navbar style={{marginBottom: "50px"}} bg="dark" variant="dark">
        <Container fluid>
          <Nav className="ms-auto" style={{ height: '50px' }}>
            <Nav.Link style={{paddingRight: "50px", fontSize: "20px"}} href="/">Home</Nav.Link>
            <Nav.Link style={{paddingRight: "50px", fontSize: "20px"}} href="/projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
}

export default NB;