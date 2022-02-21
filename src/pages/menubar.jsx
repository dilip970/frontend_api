import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav,Container } from 'react-bootstrap';

function Menubar(props) { 
        return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to='/signup' >signup</Nav.Link>
        <Nav.Link as={Link} to='/login' >Login</Nav.Link>
        <Nav.Link as={Link} to='/list' >List</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       );

    }


export default Menubar;