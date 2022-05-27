import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import ShowParts from './ShowParts';

const Parts = () => {

    //React query
    const { data: parts, isLoading, refetch } = useQuery(['parts'], () => fetch(`http://localhost:5000/parts`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const lastSixparts = parts?.slice(-6);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

            {
                lastSixparts?.map(part => <ShowParts key={part._id}
                    part={part}
                ></ShowParts>)
            }
        </div>
    );
};

export default Parts;