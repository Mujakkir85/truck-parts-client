import React from 'react';

const MyordersRow = ({ userOrder, index, setDeletingOrders }) => {

    const { product_name, address, phone, orderQuantity } = userOrder;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product_name}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{orderQuantity}</td>
            <td>
                <label onClick={() => setDeletingOrders(userOrder)} htmlFor="delete-confirm-modal" className="btn modal-button bg-red-700">Delete</label> {/* for open modal */}

            </td>
        </tr>
    );
};

export default MyordersRow;