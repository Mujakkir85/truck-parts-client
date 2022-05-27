import React from 'react';

const ManageProductRow = ({ product, index, setDeletingitem }) => {
    //console.log('mam', product)
    const { product_name, price, minimum_order_quantity, available_quantity } = product
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product_name}</td>
            <td>{price}</td>
            <td>{minimum_order_quantity}</td>
            <td>{available_quantity}</td>
            <td>
                <label onClick={() => setDeletingitem(product)} htmlFor="delete-confirm-modal" className="btn modal-button bg-red-700">Delete</label> {/* for open modal */}

            </td>
        </tr>
    );
};

export default ManageProductRow;