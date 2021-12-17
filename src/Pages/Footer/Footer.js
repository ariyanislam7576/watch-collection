import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Row className='bg-dark text-light'>
                <div className='col-md-4 text-start m-3'>
                    <h2>Watch Collection</h2>
                    <p>to keep under attentive view or observation, as in order to see or learn something; view attentively or with interest: to watch a play; to watch a football game ...</p>
                </div>
                <div className='col-md-3 my-4'>
                    <h5>Home</h5>
                    <h5>Home</h5>
                    <h5>Home</h5>
                    <h5>Home</h5>
                    <h5>Home</h5>
                </div>
                <div className='col-md-4 my-4'>
                    <h3>Contact</h3>
                    <h6>Facebbok</h6>
                    <h6>Facebbok</h6>
                    <h6>Facebbok</h6>
                    <h6>Facebbok</h6>
                </div>
            </Row>
        </>
    );
};

export default Footer;