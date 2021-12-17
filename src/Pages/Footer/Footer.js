import React from 'react';
import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Row className='bg-dark text-light'>
                <div className='col-md-4 text-start m-3'>
                    <h2>Watch Collection</h2>
                    <p>to keep under attentive view or observation, as in order to see or learn something; view attentively or with interest: to watch a play; to watch a football game ...</p>
                </div>
                <div className='col-md-3 my-4'>
                <NavLink className='m-3 text-white text-decoration-none' to="/home">Home</NavLink>
                <br />
              <NavLink className='m-3 text-white text-decoration-none' to="/dashboard">Dashboard</NavLink> 
              <br />
              <NavLink className='m-3 text-white text-decoration-none' to="/login">Log in</NavLink>
                </div>
                <div className='col-md-4 my-4'>
                    <h3>Contact</h3>
                    <h6>Facebbok</h6>
                    <h6>Twtter</h6>
                    <h6>instagram</h6>
                    <h6>YouTube</h6>
                </div>
            </Row>
        </>
    );
};

export default Footer;