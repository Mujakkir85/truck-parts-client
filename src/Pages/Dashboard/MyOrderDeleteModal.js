import React from 'react';
import { toast } from 'react-toastify';

const MyOrderDeleteModal = ({ deletingOrders, refetch, setDeletingOrders }) => {
    const { _id, product_name } = deletingOrders;
    const handleDelete = () => {
        fetch(`http://localhost:5000/myorders/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    // console.log(data)
                    toast.success(`${product_name} is deleted.`)
                    setDeletingOrders(null)
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg  text-red-700">Are you sure you want to delete {product_name}</h3>
                    <p className="py-4">If you delete it once, you will have to order it again! </p>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-xs bg-red-800">Delete</button>
                        <label for="delete-confirm-modal" className="btn btn-xs bg-green-800">Cancle</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderDeleteModal;