import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SingleProductForHome = (props) => {
    const { _id, name, img, description, price } = props.product
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
                    <button className="btn-info rounded">
                        <NavLink className='text-decoration-none text-dark' to={`/product/${_id}`}>Order</NavLink> 
                        </button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProductForHome;