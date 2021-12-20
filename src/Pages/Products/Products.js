import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from './product/Product';
const Products = () => {
    const [watch, setWatch] = useState([])
    useEffect(()=>{
        fetch('https://mysterious-citadel-30102.herokuapp.com/addedproduct')
        .then(res => res.json())
        .then(data => setWatch(data))
    },[])
    return (
        <Container className='my-5'>
            <h2 className='mb-5'>Our products</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    watch.map(p => <Product key={p._id}
                        product={p} />)
                }
            </Row>
        </Container>
    );
};

export default Products;