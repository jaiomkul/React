import { useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";

export const UsersList = () => {
    const [users, setUsers] = useState([]);

    useState(() =>{
        axios.get(`https://reqres.in/api/users`)
        .then(({data})=>{
            console.log(data.data)
            setUsers(data.data);
        });
    }, [])
    return (
        <div>
            {users.map((user) => (
                <p key={user.id}>
                    <Link to={`/users/${user.id}`}>
                    {user.id}. {user.first_name}
                    </Link>
                </p>
            ))}
        </div>
    );
};