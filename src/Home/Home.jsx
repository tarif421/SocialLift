import React from 'react';
import Banner from '../Components/HeroSection/banner';
import Feature from '../Components/MainSection/Fetaure';
import Gallery from '../Components/MainSection/Gallery';
import Newsletter from '../Components/MainSection/Newsletter';

const Home = () => {
    return (
        <div>
              <Banner/>
           
            <Feature/>
            <Gallery/>
            <Newsletter/>
        </div>
    );
};

export default Home;