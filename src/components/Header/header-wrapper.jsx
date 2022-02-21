import React from "react"
import CitySelection from "./city-selection"
import CurrentCity from "./current-city/current-city"
import CurrentWeather from "./current-weather"
import { backgroundChanger } from "../../helpers/helpers"
import CitySearch from "./city-search";
import classes from "./header.module.css"

const Header = ({currentWeather: {current, location}}) => {
  console.log(current, location)
  const {name, region} = location;
  const {temp_c, humidity, cloud, wind_kph, condition: {text, icon}} = current;

  return (
    <div className={backgroundChanger() ? 'header isDay' : 'header isNight'}>
      <div className={classes.header__top}>
        <div className={classes.header__top_navs}>
          <CitySelection city={name}/>
          <CitySearch/>
        </div>
        <CurrentCity city={name} region={region} text={text}/>
      </div>
      <div className={classes.header__bottom}>
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