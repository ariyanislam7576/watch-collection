import { getDefaultNormalizer } from '@testing-library/dom';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleProductForHome = (props) => {
    const { name, img, dis, price } = props.product
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-start'>
                    <Card.Title>{name}</Card.Title>
                    <h5>Price ${price}</h5>
                    <Card.Text>
                        {dis}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProductForHome;