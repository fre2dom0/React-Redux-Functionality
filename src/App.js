import { createRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChangeAction } from "./store/ColorChange";
import { changeTextColorActions } from "./store/textColor";
import './App.css';
import people from "./json/sample4.json"

import ChangeFn from "./components/ChangeFn";
import FormFn from "./components/FormFn";
import Products from "./components/Products";

function getLocation() {
  const truee = navigator.geolocation
  if (truee) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.")
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude)
}

function App() {
  getLocation()

  return (
    <div className="app">
      <ChangeFn/>
      <FormFn/>
      <Products/>
    </div>
  );
}

export default App;
