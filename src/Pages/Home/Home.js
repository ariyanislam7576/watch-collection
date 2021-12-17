import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import ProductForHome from './ProductForHome/ProductForHome';
import ReviewForHome from './ReviewForHome/ReviewForHome';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner></Banner>
            <ProductForHome></ProductForHome>
            <ReviewForHome></ReviewForHome>
            <Footer/>
        </div>
    );
};

export default Home;