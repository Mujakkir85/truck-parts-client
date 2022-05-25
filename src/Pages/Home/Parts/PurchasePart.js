
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading';
import './PurchasePart.css';

const PurchasePart = () => {

    const [user] = useAuthState(auth);

    console.log(user);



    const { id } = useParams()

    console.log(id);

    const { data: purchaseItem, isLoading, refetch } = useQuery(['purchase', id], () => fetch(`http://localhost:5000/purchase/${id}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    let minimum = purchaseItem.minimum_order_quantity;
    let maximu = purchaseItem.available_quantity;

    const handlepurchase = event => {
        event.preventDefault();

        let orderQuantity = event.target.order_quantity.value;

        if (orderQuantity < minimum || orderQuantity > maximu) {
            toast.error(`Quantity should be grater than default value and less than maximum value`)
        }
        else {
            const order = {
                userEmail: user.email,
                userName: user.displayName,
                address: event.target.address.value,
                phone: event.target.phone.value,
                orderQuantity: orderQuantity
            }

            //console.log(order);
            fetch(`http://localhost:5000/orderparts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('add order', data)
                    toast.success(`Order placed sucessfully`)
                    event.target.reset();
                })
        }
    }



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

            <div class="card-width card bg-base-100 shadow-xl my-28 mx-auto">
                <div class="card-body">
                    <h2 class="card-title mx-auto">Order Here</h2>
                    <form className='mx-auto' onSubmit={handlepurchase}>
                        <div className=''>
                            <input type="text" placeholder="Name" class="input input-bordered input-warning w-full max-w-xs  mb-4" disabled value={user.displayName} />
                            <input type="email" placeholder="Email" class="input input-bordered input-warning w-full max-w-xs mb-4" disabled value={user.email} />
                            <input type="text" placeholder="Address" required name='address' class="input input-bordered input-warning w-full max-w-xs mb-4" />
                            <input type="number" placeholder="Phone Number" required name='phone' class="input input-bordered input-warning w-full max-w-xs mb-4" />
                            <input type="number" placeholder="Order quantity" class="input input-bordered input-warning w-full max-w-xs mb-4" name="order_quantity" defaultValue={minimum} />
                        </div>
                        <div className="card-actions justify-center">
                            <button type='submit' className="btn btn-primary">Buy Now</button>
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