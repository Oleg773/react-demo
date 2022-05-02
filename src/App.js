import {CarForm, Cars} from "./Components";
import {useState} from "react";

function App() {
  const [newCar, setNewCar] = useState(null);
  const [updateCar, setUpdateCar] = useState(null);
  const [carForUpdate, setCarForUpdate] = useState(null);
  return (
      <div>
        <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUpdateCar={setUpdateCar} setCarForUpdate={setCarForUpdate} />
        <hr/>
        <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updateCar={updateCar}/>
      </div>
  );
}

export default App;