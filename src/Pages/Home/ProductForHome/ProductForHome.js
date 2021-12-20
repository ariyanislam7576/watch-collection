import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SingleProductForHome from './SingleProductForHome/SingleProductForHome';

const ProductForHome = () => {
    const [productForHome, setProductForHome] = useState([])
    useEffect(()=>{
        fetch('https://mysterious-citadel-30102.herokuapp.com/addedproduct')
        .then(res => res.json())
        .then(data => setProductForHome(data))
    },[])
    return (
        <Container className='my-5'>
            <h2 className='mb-5'>Our products</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    productForHome.slice(0,6).map(p => <SingleProductForHome key={p._id}
                        product={p}
                    ></SingleProductForHome>)
                }
            </Row>
            <button className='mt-4'><NavLink className='text-decoration-none text-dark' to='/product'>More Product</NavLink></button>
        </Container>





    );
};

export default ProductForHome;