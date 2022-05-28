import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AlluserRow from './AlluserRow';

const Alluser = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://immense-thicket-82990.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>   // for not getting error before data loading 
    }
    return (
        <div>
            <h2 className='text-2xl'>All Users: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <AlluserRow
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                        ></AlluserRow>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;