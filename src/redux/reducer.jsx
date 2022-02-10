import { GET_WEATHER } from "./variables"; 

const initialState = {
  success: false,
  data: {},
};

export const WeatherReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case GET_WEATHER.SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload
      };
    default:
      return state;
  }
};

export const setWeather = (data) => ({type: GET_WEATHER.SUCCESS, payload: data})