import React from 'react';
import truck from './truck.jpg'

const Banner = () => {
    return (

        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">

                <img src={truck} class="max-w-sm rounded-lg shadow-2xl" />

                <div>
                    <h1 className="text-5xl font-bold">Best Truck parts in town!</h1>
                    <p className="py-6 font-bold">We are international trucks impoter in bangladesh, sylhet. We have two showrooms in sylhet town. We import moth authentic parts for our customers.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;