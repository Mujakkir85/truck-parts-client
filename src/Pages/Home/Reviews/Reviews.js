import React from 'react';

const Reviews = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body ">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 align-center">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <h2 className="card-title flex justify-center">Card title!</h2>
                    <p className='flex justify-center'>Rating: 4.5/ 5</p>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body ">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 align-center">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <h2 className="card-title flex justify-center">Card title!</h2>
                    <p className='flex justify-center'>Rating: 4.5/ 5</p>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body ">
                    <div className="avatar flex justify-center">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 align-center">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <h2 className="card-title flex justify-center">Card title!</h2>
                    <p className='flex justify-center'>Rating: 4.5/ 5</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;