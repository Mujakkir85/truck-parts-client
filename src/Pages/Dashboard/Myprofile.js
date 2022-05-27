import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';


const Myprofile = () => {

    const [user] = useAuthState(auth);

    /*const { data: mydata, isLoading, refetch } = useQuery(['singleuser', user.email], () => fetch(`http://localhost:5000/singleuser?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    //.then(data => console.log(data))))

    if (isLoading) {
        <Loading></Loading>
    }*/


    const handleUpadate = event => {

        event.preventDefault();

        const update = {
            email: user.email,
            username: user.displayName,
            //username: event.target.name.value,
            loaction: event.target.loaction.value,
            phone: event.target.phone.value
        }
        console.log(update)

        fetch(`http://localhost:5000/updateuser/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        })
            .then(response => response.json())
            .then(data => {
                //console.log('Success:', data);
                toast.success('User updated successfullly!!')
                event.target.reset();
            })

    }

    return (
        <div className="card-width card bg-base-100 shadow-xl my-4 mx-auto ">
            <div className="card-body">
                <h2 className="card-title mx-auto my-4">Update Profile</h2>
                <form className='mx-auto' onSubmit={handleUpadate}>
                    <div className='grid grid-cols-1 w-96 content-center'>
                        <input type="text" placeholder="Name" className="input input-bordered input-warning w-full max-w-xs  mb-4" disabled value={user.displayName} />
                        <input type="email" placeholder="Email" className="input input-bordered input-warning w-full max-w-xs mb-4" disabled value={user.email} />
                        <input type="text" placeholder="User loaction" required name='loaction' className="input input-bordered input-warning w-full max-w-xs mb-4" />
                        <input type="number" placeholder="Phone Number" required name='phone' className="input input-bordered input-warning w-full max-w-xs mb-4" />
                    </div>
                    <div className="card-actions justify-center">
                        <button type='submit' className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div> //
    );
};

export default Myprofile;