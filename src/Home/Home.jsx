import React from 'react';
import Banner from '../Components/HeroSection/banner';
import Feature from '../Components/MainSection/Fetaure';
import Gallery from '../Components/MainSection/Gallery';

const Home = () => {
    return (
        <div>
              <Banner/>
           
            <Feature/>
            <Gallery/>
        </div>
    );
};

export default Home;