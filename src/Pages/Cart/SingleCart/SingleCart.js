import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleCart = (props) => {
    console.log(props);
    const {name,img,dis,price} = props.products
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className='text-start'>
                    <Card.Title>{name}</Card.Title>
                    <h3>Price: ${price}</h3>
                    <Card.Text>
                        {dis}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleCart;