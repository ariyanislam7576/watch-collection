import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = (props) => {
    const { name, img, description, price } = props.product
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-start'>
                    <Card.Title>{name}</Card.Title>
                    <h5>Price ${price}</h5>
                    <Card.Text>
                        {description.slice(0,100)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;