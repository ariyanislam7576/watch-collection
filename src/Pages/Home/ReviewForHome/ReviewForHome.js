import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SingleReviewForHome from './SingleReviewForHome/SingleReviewForHome';

const ReviewForHome = () => {
    const [review , setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4500/addedreview')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <Container className='my-5'>
            <h2 className='mb-5'>Customar Review</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    review.slice(0,3).map(r => <SingleReviewForHome key={r._id}
                        Review={r} />)
                }
            </Row>
            <button className='btn-info mt-4'><NavLink className='text-decoration-none text-white' to='/review'>More Review</NavLink></button>
        </Container>
    );
};

export default ReviewForHome;