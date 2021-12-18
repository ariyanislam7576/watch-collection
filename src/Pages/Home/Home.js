import React from 'react';
import LatestCollection from '../LatestCollection/LatestCollection';
import Banner from './Banner/Banner';
import ProductForHome from './ProductForHome/ProductForHome';
import ReviewForHome from './ReviewForHome/ReviewForHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestCollection/>
            <ProductForHome></ProductForHome>
            <ReviewForHome></ReviewForHome>
        </div>
    );
};

export default Home;