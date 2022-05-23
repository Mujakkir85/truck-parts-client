import React from 'react';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <h1 className='font-bold text-4xl text-center text-primary py-10'>Choose Your Parts</h1>
            <Parts></Parts>
            <h1 className='font-bold text-4xl text-center text-primary py-10'>We Are Best Dealer In Town </h1>
            <Summary></Summary>

        </div>
    );
};

export default Home;