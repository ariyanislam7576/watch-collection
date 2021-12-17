import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from './SingleReview/SingleReview';


const ReviewCollection = [
    {
        id: 1,
        name: "Jon Dalton",
        review: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.",
        star: 3.5,
        img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'

    },
    {
        id: 2,
        name: "Hasina Hamid",
        review: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.",
        star: 3.5,
        img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'

    },
    {
        id: 3,
        name: "Jamil Hosain",
        review: "If you're familiar with the JavaScript ecosystem, React, and React Router, this serves as a quick overview of React Router v6 with lots of code and minimal explanations.",
        star: 4.5,
        img: 'https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'

    },
]
const Review = () => {
    return (
        <Container className='my-5'>
            <h2 className='mb-5'>Customar Review</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    ReviewCollection.map(r => <SingleReview key={r.id}
                        Review={r} />)
                }
            </Row>
        </Container>
    );
};

export default Review;