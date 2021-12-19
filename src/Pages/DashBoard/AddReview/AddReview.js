import React from 'react';
import { Container, Row } from 'react-bootstrap';

const AddReview = () => {
    return (
        <Container>
            <Row>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form action="">
                        <input type="text" placeholder='Enter your name' /> <br /><br />
                        <input type="image" src="" alt="" placeholder='Uplodad your photo' />
                        <br /><br />
                        <textarea name="" id="" cols="30" placeholder='Review' rows="10"></textarea>
                        <br /><br />
                        <input type="number" name="" id="" placeholder='Rete us' />
                        <br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </Row>
        </Container>
    );
};

export default AddReview;