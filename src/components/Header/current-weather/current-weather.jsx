import React, {useState} from "react";
import classes from "./current-weather.module.css"
import { kmhToMs } from "../../../helpers/helpers"
import preloader from "../../../assets/preloader/Rolling-1s-200px.svg"

const CurrentWeather = ({temp, humidity, cloud, icon, wind, text}) => {
  const [load, setLoad] = useState(false);

  return (
    <div className={classes.CurrentWeather}>
      <div className={classes.CurrentWeather__temp}>
        { Math.floor(temp) > 0 ? '+' + Math.floor(temp) : Math.floor(temp) }
      </div>
      <div className={classes.CurrentWeather__icon}>
          <img
            src={ load ? icon : preloader }
            alt={text}
            onLoad={(e) => setLoad(true)}
          />
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