import Header from "./components/Header/header-wrapper";
import Body from "./components/Body/forecast-wrapper";
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getWeather} from "./redux/actions"
import Preloader from "./components/Others/Preloader";

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.WeatherReducer)
  const {forecast, ...currentWeather} = weatherData.data

  useEffect(() => {
    dispatch(getWeather());
  }, [])

  return (
    <div className="App">
      { !!weatherData.success ?
        <div>
          <Header currentWeather={currentWeather}/>
          <Body forecast={forecast}/>
        </div>
        : <Preloader/> }
    </div>
  );
}

export default App;
