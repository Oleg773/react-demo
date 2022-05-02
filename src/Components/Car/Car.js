import React from 'react';
import {carService} from "../../Services";

const Car = ({car, setCarForUpdate, setDeleteCarId}) => {
    const {id, model, price, year} = car
    const deleteCar = async () => {
        await carService.deleteById(id)
        setDeleteCarId(id)
    }
    return (
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <br/>
            <button onClick={()=>deleteCar()} >Delete</button>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
        </div>
    );
};

export {Car};