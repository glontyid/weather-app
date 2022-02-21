import React, {useState} from "react";
import {getCurrentWeekDay, getMonthName} from "../../../helpers/helpers";
import classes from "./forecast-day.module.css"
import preloader from "../../../assets/preloader/Rolling-1s-200px.svg"

const ForecastDay = ({data}) => {
  const date = new Date(data.date);
  const isToday = new Date().getDate() === date.getDate();
  const [load, setLoad] = useState(false);

  return (
    <div className={classes.forecastDay}>
      <div className={classes.forecastDay__dayName}>
        { isToday ? 'Сегодня' : getCurrentWeekDay(date.getDay(), true) }
      </div>
      <div className={classes.forecastDay__dayDate}>
        {date.getDate()} {getMonthName(date.getMonth())}
      </div>
      <div className={classes.forecastDay__dayWeatherIcon}>
        <img
          src={ load ? data.day.condition.icon : preloader }
          alt={data.day.condition.text}
          onLoad={() => setLoad(true)}
        />
      </div>
      <div className={classes.forecastDay__dayTemp}>
        <span className={classes.forecastDay__maxTemp}>
          {Math.round(data.day.maxtemp_c) > 0 ? '+' + Math.round(data.day.maxtemp_c) : Math.round(data.day.maxtemp_c)}°
        </span>
        <span className={classes.forecastDay__minTemp}>
          {Math.round(data.day.mintemp_c) > 0 ? '+' + Math.round(data.day.mintemp_c) : Math.round(data.day.mintemp_c)}°
        </span>
      </div>
      <div className={classes.forecastDay__dayWeather}>
        {data.day.condition.text}
      </div>
    </div>
  )
}

export default ForecastDay