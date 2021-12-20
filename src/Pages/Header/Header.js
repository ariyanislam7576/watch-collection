import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth()
    return (
            <div>
      <Navbar bg="dark" expand="sm">
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Watch Collection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='m-3 text-white text-decoration-none' to="/home">Home</NavLink>
              <NavLink className='m-3 text-white text-decoration-none' to="/dashboard">Dashboard</NavLink> 
            </Nav>
            {user?.displayName ? <button onClick={logOut}>logout</button>
            :
            <NavLink className='m-3 text-white text-decoration-none' to="/login"> <button>Log in</button> </NavLink>
           }{
             user.displayName && <img width='40px' className='rounded-circle' src={user.photoURL} alt="" />
           }
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    );
};

export default Header;