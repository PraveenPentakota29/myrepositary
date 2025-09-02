import {Link, useLocation } from 'react-router-dom';
const Users = ()=>{
    const myparams = useLocation();
    const searchParams = new URLSearchParams(myparams.search);
    const name=searchParams.get("name");
    const id = searchParams.get("id");
    console.log(name," ",id);
    return(
        <>
        <h1>users</h1>
        <ol>
            <li><Link to={/user-details/${1}}>user-1</Link></li>
            <li><Link to={/user-details/${2}}>user-2</Link></li>
            <li><Link to={/user-details/${3}}>user-3</Link></li>
            <li><Link to={/user-details/${4}}>user-4</Link></li>
        </ol>
        </>
    )
}
export default Users;