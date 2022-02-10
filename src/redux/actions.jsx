import axios from "axios";
import { setWeather } from "./reducer";

export const getWeather = () => async (dispatch) => {
  const getLocation = new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve(position)
    });
  });

  getLocation.then((res) => {
    axios(`https://api.weatherapi.com/v1/forecast.json?key=eeb70c97c50a4ebfbbe145845220202&q=${res.coords.latitude},${res.coords.longitude}&days=10&lang=ru`)
      .then(response => {
        if (response.status === 200) {
          dispatch(setWeather(response.data))
        }
      })
  })
};