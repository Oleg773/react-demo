import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService ={
    getAll:()=>axiosService.get(urls.cars),// get завжди витягуємо
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    create:(car)=>axiosService.post(urls.cars, car),// post записує інфу на сервер
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    updateById:(id, newCar)=>axiosService.put(`${urls.cars}/${id}`, newCar)
}

export {carService}