import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";
import {usersService} from "../../services";
import {UserDetails} from "../../components/UserDetails/UserDetails";

const SingleUserPage = () => {

    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {userId} = useParams();

    useEffect(()=>{
        if(!state){
            usersService.getById(userId).then(({data})=>setUser(data))
        }else {
            setUser(state)
        }
    },[userId, state])

    return (
        <div>
            <div>{user && <UserDetails user={user}/>}</div>
            <Outlet/>
        </div>
    );
};

export {SingleUserPage};