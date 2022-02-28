import React from "react";
import {useDispatch} from "react-redux";
import {getSelectedCityWeather, getWeather} from "../../../redux/actions";
import classes from "./city-selection.module.css"

const CitySelection = (props) => {
  const dispatch = useDispatch();

  function selectCity(event) {
    if (event.target.value === 'currentGeolocation') {
      dispatch(getWeather())
    } else {
      dispatch(getSelectedCityWeather(event.target.value))
    }
  }

  return (
    <select className={classes.citySelection} onChange={selectCity}>
      <option value="currentGeolocation">
        Текущее местоположение
      </option>
      <option value="москва">
        Москва
      </option>
      <option value="самара">
        Самара
      </option>
    </select>
  )
}

export default CitySelection;