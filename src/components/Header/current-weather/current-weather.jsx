import React from "react";
import classes from "./current-weather.module.css"
import { kmhToMs } from "../../../helpers/helpers"

const CurrentWeather = ({temp, humidity, cloud, icon, wind, text}) => {
  return (
    <div className={classes.CurrentWeather}>
      <div className={classes.CurrentWeather__temp}>
        { Math.floor(temp) }
      </div>
      <div className={classes.CurrentWeather__icon}>
        <img src={icon} alt={text} />
      </div>
      <div className={classes.CurrentWeather__description}>
        <div className={classes.CurrentWeather__description_precipitation}>
        <span>Вероятность осадков:</span> {cloud}%
        </div>
        <div className={classes.CurrentWeather__description_humidity}>
        <span>Влажность:</span> {humidity}%
        </div>
        <div className={classes.CurrentWeather__description_wind}>
        <span>Ветер:</span> {kmhToMs(wind)} м/с
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather