import React, { useEffect, useState } from 'react';
import ShowReview from './ShowReview';

const Reviews = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/showReview`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setReview(data)
            })

    }, [])

    const last_three = reviews?.slice(-3);
    return (
        // <div>
        //     <p>{reviews.length}</p>
        // </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                last_three?.map(review => <ShowReview
                    key={review._id}
                    review={review}
                >
                </ShowReview>)
            }
        </div>
    );
};

export default Reviews;