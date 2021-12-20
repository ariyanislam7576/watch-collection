import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from './SingleReview/SingleReview';



const Review = () => {
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('https://mysterious-citadel-30102.herokuapp.com/addedreview')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <Container className='my-5'>
            <h2 className='mb-5'>Customar Review</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    reviews.map(r => <SingleReview key={r._id}
                        review={r} />)
                }
            </Row>
        </Container>
    );
};

export default Review;