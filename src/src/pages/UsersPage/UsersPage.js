import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import css from './Users.module.css'
import {usersService} from "../../services";
import {User} from "../../components";


const UsersPage = () => {
    const [users, setUsers] = useState(null);
    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers(data))
    },[])
    return (
        <div className={css.wrapper}>
            <div>{users && users.map(user=><User key={user.id} user={user}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {UsersPage};