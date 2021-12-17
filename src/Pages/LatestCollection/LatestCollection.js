import React from 'react';
import { Container, Row } from 'react-bootstrap';

const LatestCollection = () => {
    return (
        <Container>
            <h2 className='my-5'>Latest Collcetion</h2>
            <Row className='d-flex justify-content-evenly'>
            <div className='col-md-5 d-flex align-items-center border border-dark'>
                <h3>Jambo watch</h3>
                    <img className='w-75' src="https://image.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg" alt="" />
                </div>
            <div className='col-md-5 d-flex align-items-center border border-dark'>
                <h3>Jambo watch</h3>
                    <img className='w-75' src="https://image.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg" alt="" />
                </div>
                
            </Row>
        </Container>
    );
};

export default LatestCollection;