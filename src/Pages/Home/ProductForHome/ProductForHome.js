import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProductForHome from './SingleProductForHome/SingleProductForHome';

const productForHome = [
    {
        id: 1,
        name: "watch1",
        dis: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.",
        price: 100,
        img: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80'

    },
    {
        id: 2,
        name: "watch1",
        dis: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.",
        price: 100,
        img: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80'

    },
    {
        id: 3,
        name: "watch3",
        dis: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.",
        price: 100,
        img: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80'

    },
    {
        id: 4,
        name: "watch4",
        dis: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.",
        price: 100,
        img: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80'

    },
    {
        id: 5,
        name: "watch5",
        dis: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.",
        price: 100,
        img: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80'

    },
    {
        id: 6,
        name: "watch6",
        dis: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.",
        price: 100,
        img: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80'

    },

]

const ProductForHome = () => {
    return (
        <Container className='my-5'>
            <h2 className='mb-5'>Our products</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    productForHome.map(p => <SingleProductForHome key={p.id}
                        product={p}
                    ></SingleProductForHome>)
                }
            </Row>
        </Container>





    );
};

export default ProductForHome;