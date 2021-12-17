import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
            <div>
      <Navbar bg="dark" expand="sm">
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Doctor's Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='m-3 text-white text-decoration-none' to="/home">Home</NavLink>
              <NavLink className='m-3 text-white text-decoration-none' to="/about">About</NavLink> 
              <NavLink className='m-3 text-white text-decoration-none' to="/doctors">Doctors</NavLink>
              <NavLink className='m-3 text-white text-decoration-none' to="/service">Service</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    );
};

export default Header;