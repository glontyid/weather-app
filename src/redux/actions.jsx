import axios from "axios";
import {initWeather, setWeather} from "./reducer";

const apiKey = 'eeb70c97c50a4ebfbbe145845220202';
const initialCity = 'москва';

export const getWeather = () => async (dispatch) => {
  const getLocation = await new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      resolve(position)
    },
    function(error) {
      axios(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${initialCity}&days=10&lang=ru`)
        .then(response => {
          if (response.status === 200) {
            dispatch(initWeather(response.data))
          }
        })
    });
  });

  axios(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${getLocation.coords.latitude},${getLocation.coords.longitude}&days=10&lang=ru`)
    .then(response => {
      if (response.status === 200) {
        dispatch(initWeather(response.data))
      }
    })
};

export const getSelectedCityWeather = (city) => async (dispatch) => {
  axios(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=10&lang=ru`)
    .then(response => {
      if (response.status === 200) {
        dispatch(setWeather(response.data))
      }
    }).catch(err => {
      alert("проверьте корректность ввода названия города")
  })
};