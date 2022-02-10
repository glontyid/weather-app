import React from "react"
import CitySelection from "./city-selection"
import CurrentCity from "./current-city/current-city"
import CurrentWeather from "./current-weather"
import { backgroundChanger } from "../../helpers/helpers"
import classes from "./header.module.css"

const Header = ({currentWeather: {current, location}}) => {
  const {name, region} = location;
  const {temp_c, humidity, cloud, wind_kph, condition: {text, icon}} = current;

  return (
    <div className={backgroundChanger() ? 'Header isDay' : 'Header isNight'}>
      <div className={classes.Header__top}>
        <CurrentCity city={name} region={region} text={text}/>
        <CitySelection city={name}/>
      </div>
      <div className={classes.Header__bottom}>
        <CurrentWeather 
        temp={temp_c} 
        humidity={humidity} 
        cloud={cloud}
        icon={icon}
        wind={wind_kph}
        text={text}/>
      </div>
    </div>
  )
}

export default Header