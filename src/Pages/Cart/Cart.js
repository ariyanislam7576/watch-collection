import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SingleCart from './SingleCart/SingleCart';

const Cart = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ariyanislam7576/watch.json/main/Watch.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const { productId } = useParams({})
        const product = []
        if (products?.length) {
            const findProduct = products.find(p => p.id === parseInt(productId))
            product.push(findProduct)
        }
    return (
       <Container>
            <Row className='my-5'>
            <div className="col-md-4">
            {
                product.map(singleProduct => <SingleCart
                key={singleProduct.id}
                products={singleProduct}
                />)
            }
            </div>
            <div className="col-md-4">
                <h3>fill the form</h3>
                <form action="" className='my-5'>
                    <input type="text" placeholder='Name' />
                    <br /> <br />
                    <input type="email" name="" id="" placeholder='Email' />
                    <br /> <br />
                    <input type="number" name="" id="" placeholder='Phone' />
                    <br /> <br />
                    <input type="text" placeholder='Address' />
                    <br /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </Row>
       </Container>
    );
};

export default Cart;