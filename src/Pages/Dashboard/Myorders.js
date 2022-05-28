import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import MyOrderDeleteModal from './MyOrderDeleteModal';
import MyordersRow from './MyordersRow';

const Myorders = () => {

    const [user] = useAuthState(auth);

    const [deletingOrders, setDeletingOrders] = useState(null);

    const { data: userOrders, isLoading, refetch } = useQuery(['userOrders', user.email], () => fetch(`https://immense-thicket-82990.herokuapp.com/userOrders?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <h2 className="texl-2xl"> Total Orders: {userOrders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userOrders?.map((userOrder, index) => <MyordersRow
                                key={userOrder._id}
                                userOrder={userOrder}
                                index={index}
                                refetch={refetch}
                                setDeletingOrders={setDeletingOrders}
                            ></MyordersRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrders && <MyOrderDeleteModal
                    deletingOrders={deletingOrders}
                    refetch={refetch}
                    setDeletingOrders={setDeletingOrders} // pass this for makiing modal null after delete
                ></MyOrderDeleteModal>
            }
        </div>
    );
};

export default Myorders;