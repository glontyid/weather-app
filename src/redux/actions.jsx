import axios from "axios";
import {initWeather, setWeather} from "./reducer";

export const getWeather = () => async (dispatch) => {
  const getLocation = await new Promise((resolve) => {
    console.log(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve(position)
    });
  });

  axios(`https://api.weatherapi.com/v1/forecast.json?key=eeb70c97c50a4ebfbbe145845220202&q=${getLocation.coords.latitude},${getLocation.coords.longitude}&days=10&lang=ru`)
    .then(response => {
      if (response.status === 200) {
        dispatch(initWeather(response.data))
      }
    })
};

export const getSelectedCityWeather = (city) => async (dispatch) => {
  axios(`https://api.weatherapi.com/v1/forecast.json?key=eeb70c97c50a4ebfbbe145845220202&q=${city}&days=10&lang=ru`)
    .then(response => {
      if (response.status === 200) {
        dispatch(setWeather(response.data))
      }
    })
};