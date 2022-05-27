import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner/Banner';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';
import Summary from './Summary/Summary';
import OwnerWords from './TruckShowRoom/OwnerWords';

import TruckShowRoom from './TruckShowRoom/TruckShowRoom';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <h1 className='font-bold text-4xl text-center text-primary py-10'>Choose Your Parts</h1>
            <Parts></Parts>
            <h1 className='font-bold text-4xl text-center text-primary py-20'>We Are Best Dealer In Town </h1>
            <Summary></Summary>
            <h1 className='font-bold text-4xl text-center text-primary py-20'>User Reviews </h1>
            <Reviews></Reviews>
            <h1 className='font-bold text-4xl text-center text-primary py-20'>Opening Our New Truck Showroom </h1>
            <TruckShowRoom></TruckShowRoom>
            <h1 className='font-bold text-4xl text-center text-primary py-20'>Owner's Word</h1>
            <OwnerWords></OwnerWords>
            <Footer></Footer>
        </div>
    );
};

export default Home;