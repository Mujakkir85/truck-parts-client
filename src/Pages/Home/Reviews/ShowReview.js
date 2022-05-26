import React from 'react';

const ShowReview = ({ review }) => {

    const { reviewName, reviewerEmail, description, rating } = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body ">
                <div className="avatar flex justify-center">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 align-center">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                </div>
                <h2 className="card-title flex justify-center">Name: {reviewName}</h2>
                <p className='flex justify-center'>Email: {reviewerEmail}</p>
                <p className='flex justify-center'>Comment: {description}</p>
                <p className='flex justify-center'>Rating: {rating}</p>

            </div>
        </div>
    );
};

export default ShowReview;