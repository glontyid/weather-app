import { GET_WEATHER } from "./variables"; 

const initialState = {
  success: false,
  data: {},
  currentCity: null
};

export const WeatherReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case GET_WEATHER.SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload,
        currentCity: action.payload.location.name
      };
    case GET_WEATHER.CHANGE_CITY:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
};

export const initWeather = (data) => ({type: GET_WEATHER.SUCCESS, payload: data})
export const setWeather = (data) => ({type: GET_WEATHER.CHANGE_CITY, payload: data})