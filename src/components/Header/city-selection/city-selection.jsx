import React from "react";
import {useDispatch, useSelector} from "react-redux";
import classes from "./city-selection.module.css"
import {getSelectedCityWeather} from "../../../redux/actions";

const CitySelection = (props) => {
  const initialCity = useSelector(state => state.WeatherReducer.currentCity)
  const dispatch = useDispatch();

  function selectCity(event) {
    dispatch(getSelectedCityWeather(event.target.value))
  }

  return (
    <select className={classes.citySelection} onChange={selectCity}>
      <option value={initialCity}>
        { initialCity }
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