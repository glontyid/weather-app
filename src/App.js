import Header from "./components/Header/header-wrapper";
import Body from "./components/Body/forecast-wrapper";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "./redux/actions"

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.WeatherReducer)
  const { forecast, ...currentWeather } = weatherData.data
  const isLoading = weatherData.success ? true : false

  useEffect(() => {
    dispatch(getWeather());
  }, [])

  return (
      <div className="App">
        { isLoading ? 
        <div>
          <Header currentWeather={currentWeather}/>
          <Body forecast={forecast}/>
        </div>
        : false}
      </div>
  );
}

export default App;
