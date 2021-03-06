import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Review = () => {

    const [user] = useAuthState(auth)

    const handleReviews = event => {
        event.preventDefault();

        const review = {
            reviewName: user.displayName,
            reviewerEmail: user.email,
            productName: event.target.productName.value,
            description: event.target.description.value,
            rating: event.target.rating.value
        }
        console.log(review)

        fetch(`https://immense-thicket-82990.herokuapp.com/addreview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => {
                console.log('add review', data)
                toast.success(`Review added successfully`)
                event.target.reset();
            })
    }

    return (
        <div className="card-width card bg-base-100 shadow-xl my-4 mx-auto ">
            <div className="card-body">
                <h2 className="card-title mx-auto my-4">Add A Review</h2>
                <form className='mx-auto' onSubmit={handleReviews}>
                    <div className='grid grid-cols-1 w-96 content-center'>
                        <input type="text" placeholder="Name" className="input input-bordered input-warning w-full max-w-xs  mb-4" disabled value={user.displayName} />
                        <input type="email" placeholder="Email" className="input input-bordered input-warning w-full max-w-xs mb-4" disabled value={user.email} />
                        <input type="text" placeholder="product name" required name='productName' className="input input-bordered input-warning w-full max-w-xs mb-4" />
                        <input type="text" placeholder="Review Description" required name='description' className="input input-bordered input-warning w-full max-w-xs mb-4" />
                        <input type="number" placeholder="Rating out of 5" required name='rating' className="input input-bordered input-warning w-full max-w-xs mb-4" />
                    </div>
                    <div className="card-actions justify-center">
                        <button type='submit' className="btn btn-primary">Add Review</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Review;