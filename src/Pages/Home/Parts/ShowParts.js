import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowParts = ({ part }) => {
    const navigate = useNavigate()
    const { _id, product_name, description, price, image, minimum_order_quantity, available_quantity } = part

    const handleBuyNow = () => {
        navigate(`/partsDetais/${_id}`)
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure className='w-1/2'><img src={image} alt="part" /></figure>
            <div class="card-body">
                <h2 class="card-title">{product_name}</h2>
                <p>{description}</p>
                <p>Available: {available_quantity}</p>
                <p>Minimum Order: {minimum_order_quantity}</p>
                <p>Price: {price}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => handleBuyNow(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowParts;