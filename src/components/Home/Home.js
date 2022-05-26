import React from 'react';
import Banner from './Banner/Banner';
import Business from './Business';
import Offer from './Offer/Offer';
import Portfolio from './Portfolio/Portfolio';
import Review from './Review/Review';
import Speciality from './Speciality/Speciality';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Speciality></Speciality>
            <Business></Business>
            <Offer></Offer>
            <Review></Review>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;