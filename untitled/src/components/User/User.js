import React from 'react';
import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name, username} = user
    return (
        <div>
            {id} - {name} - {username}<Button state={user} to={id.toString()}>Show Info</Button>
        </div>
    );
};

export {User};