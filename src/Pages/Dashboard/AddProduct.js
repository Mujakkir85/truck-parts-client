import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const handleaddprats = event => {

        event.preventDefault();

        const addparts = {
            product_name: event.target.product_name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            image: event.target.image.value,
            minimum_order_quantity: event.target.minimum_order_quantity.value,
            available_quantity: event.target.available_quantity.value,
        }

        console.log(addparts);
        fetch(`http://localhost:5000/addparts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addparts)
        })
            .then(response => response.json())
            .then(data => {
                console.log('add part', data)
                toast.success(`Add a part sucessfully`)
                event.target.reset();
            })
    }
    return (
        <div>

            <div className="card-width card bg-base-100 shadow-xl my-28 mx-auto">
                <div className="card-body">
                    <h2 className="card-title mx-auto my-4">Add New Parts</h2>
                    <form className='mx-auto' onSubmit={handleaddprats}>
                        <div className='grid grid-cols-1 w-96 content-center'>
                            <input type="text" placeholder="product_name" className="input input-bordered input-warning w-full max-w-xs  mb-4" name='product_name' />
                            <input type="text" placeholder="description" className="input input-bordered input-warning w-full max-w-xs mb-4" name='description' />
                            <input type="text" placeholder="price" className="input input-bordered input-warning w-full max-w-xs mb-4" name='price' />
                            <input type="text" placeholder="image url" required className="input input-bordered input-warning w-full max-w-xs mb-4" name='image' />
                            <input type="number" placeholder="minimum order quantity" required name='minimum_order_quantity' className="input input-bordered input-warning w-full max-w-xs mb-4" />
                            <input type="number" placeholder="available quantity" className="input input-bordered input-warning w-full max-w-xs mb-4" name="available_quantity" />
                        </div>
                        <div className="card-actions justify-center">
                            <button type='submit' className="btn btn-primary">Add Parts</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;