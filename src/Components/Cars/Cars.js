import {useEffect, useState} from 'react';
import {carService} from "../../Services";
import {Car} from "../Car/Car";


const Cars = ({newCar, setCarForUpdate, updateCar}) => {

    const [cars, setCars] = useState([]);
    const [deleteCarId, setDeleteCarId] = useState([]);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[newCar, updateCar, deleteCarId])

    // useEffect(()=>{
    //     if (newCar){
    //         setCars(prevState => [...prevState, newCar])
    //     }
    //     if (deleteCarId){
    //         setCars(cars.filter(car => car.id !== deleteCarId))
    //     }
    // },[newCar, deleteCarId])
    //
    // useEffect(()=>{
    //     if (updateCar){
    //         const car = cars.find(car => car.id === updateCar.id)
    //         Object.assign(car, updateCar)
    //         setCars([...cars])
    //     }
    // },[updateCar])

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeleteCarId={setDeleteCarId}/>)}
        </div>
    );
};

export {Cars};