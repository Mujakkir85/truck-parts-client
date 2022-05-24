import { useEffect, useState } from "react";


const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        //console.log('mr user', user) //first user will undefine

        const email = user?.user?.email;

        const username = user?.user?.displayName;

        // console.log(username);

        const currentUser = { email: email, username: username }

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }

    }, [user]);
    return [token];
}

export default useToken;