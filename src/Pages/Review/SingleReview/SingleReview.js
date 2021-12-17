import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleReview = (props) => {
    const {name, review , img, star} = props.Review
    return (
        <Col>
            <Card>
                <Card.Img className='w-50 m-5 rounded-circle' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {review}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleReview;