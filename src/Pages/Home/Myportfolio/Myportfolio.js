import React from 'react';

const Myportfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Mujakkir Ahmed</h1>
                    <p className="pt-6 pb-2">B.Sc in Computer Science & Engineering, Leading University, Sylhet</p>
                    <p>Email: mujakkirlucse@gmail.com</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-3xl font-bold'>My three website link</h2>
                        <a href="https://furniture-warehouse-455c7.firebaseapp.com/" target="_blank" className='text-xl font-bold'>Website 1 : Furniture Warehouse</a>
                        <a href="https://wildlife-photographr-7be05.firebaseapp.com/home" target="_blank" className='text-xl font-bold'> Website 2 : Wildlife Photographr</a>
                        <a href="https://wildlife-photographr-7be05.firebaseapp.com/home" target="_blank" className='text-xl font-bold'> Website 3 : Truck Parts</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myportfolio;