import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';


const Myprofile = () => {

    const [user] = useAuthState(auth);

    const { data: mydata, isLoading, refetch } = useQuery(['singleuser', user.email], () => fetch(`http://localhost:5000/singleuser?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    //.then(data => console.log(data))))

    if (isLoading) {
        <Loading></Loading>
    }

    //console.log(data);
    return (
        <div>
            <h2>My profile {mydata?.length}</h2>
        </div>
    );
};

export default Myprofile;