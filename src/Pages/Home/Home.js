import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LatestCollection from '../LatestCollection/LatestCollection';
import Banner from './Banner/Banner';
import ProductForHome from './ProductForHome/ProductForHome';
import ReviewForHome from './ReviewForHome/ReviewForHome';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner></Banner>
            <LatestCollection/>
            <ProductForHome></ProductForHome>
            <ReviewForHome></ReviewForHome>
            <Footer/>
        </div>
    );
};

export default Home;