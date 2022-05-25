import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading';
import './PurchasePart.css';

const PurchasePart = () => {

    const { id } = useParams()

    console.log(id);

    const { data: purchaseItem, isLoading, refetch } = useQuery(['purchase', id], () => fetch(`http://localhost:5000/purchase/${id}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // const [purchaseItem, setPurchaseItem] = useState({})

    // useEffect(() => {
    //     fetch(`http://localhost:5000/purchase/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             //console.log(data);
    //             setPurchaseItem(data)
    //         }
    //         )
    // })

    return (
        <div className='py-16'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='image' ><img src={purchaseItem.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{purchaseItem.product_name}</h2>
                    <p>{purchaseItem.description}</p>
                    <p>Available: {purchaseItem.available_quantity}</p>
                    <p>Minimum Order:{purchaseItem.minimum_order_quantity}</p>
                    <p>Price:{purchaseItem.price}</p>
                </div>
            </div>

            <div class="card-width card bg-base-100 shadow-xl my-28">
                <div class="card-body">
                    <h2 class="card-title mx-auto">Order Here</h2>
                    <form>
                        <div className='d-flex justify-center'>
                            <input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />
                            <input type="text" placeholder="Type here" class="input input-bordered input-warning w-full max-w-xs" />
                        </div>
                        <div class="card-actions justify-center">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='py-28'>

            </div>
        </div>
    );
};

export default PurchasePart;