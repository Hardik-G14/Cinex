import React from 'react'
import "./Home.scss";
import HeroBanner from './heroBanner/HeroBanner';

const Home = () => {
    return (
        <div className='homePage'>
            <HeroBanner />
            Homepage
        </div>
    )
}

export default Home