import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteProduct from './DeleteProduct';
import ManageProductRow from './ManageProductRow';

const ManageProduct = () => {
    const [deletingitem, setDeletingitem] = useState(null);

    const { data: allproducts, isLoading, refetch } = useQuery('parts', () => fetch(`http://localhost:5000/parts`)
        .then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    console.log(allproducts);

    return (
        <div>
            <h2 className="texl-2xl"> Total Orders: {allproducts?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>minimum_order</th>
                            <th>available_quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allproducts?.map((product, index) => <ManageProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingitem={setDeletingitem}
                            ></ManageProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingitem && <DeleteProduct
                    deletingitem={deletingitem}
                    refetch={refetch}
                    setDeletingitem={setDeletingitem} // pass this for makiing modal null after delete
                ></DeleteProduct>
            }
        </div>
    );
};

export default ManageProduct;