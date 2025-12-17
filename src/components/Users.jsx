import { useEffect, useState } from "react";
import axios from "axios";

function Users(){
    const [users,setUsers]= useState([])
    const [loading,setLoading]= useState(true)
    const [error,setError] = useState("")
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{setUsers(res.data)
            setLoading(false);
        })
        .catch(()=>{
            setError("Failed to load users")
            setLoading(false)
        })
    })
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    return(
        <div>
            <ul>
                {users.map((u)=>(
                    <li key={u.id}>
                        {u.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Users;