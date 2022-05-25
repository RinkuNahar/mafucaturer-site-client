import React from 'react';
import Banner from './Banner/Banner';
import Business from './Business';
import Review from './Review/Review';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Business></Business>
            <Review></Review>
        </div>
    );
};

export default Home;