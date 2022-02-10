import React from "react";
import { getCurrentWeekDay } from "../../../helpers/helpers";
import classes from "./forecast-day.module.css"

const ForecastDay = ({data}) => {
  const date = new Date(data.date);
  const isToday = new Date().getDate() === date.getDate() ? true : false;
  const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Ноября','Декабря']
    

  return (
    <div className={classes.ForecastDay}>
      <div className={classes.ForecastDay__dayName}>
        { isToday ? 'Сегодня' : getCurrentWeekDay(date.getDay(), true) }
      </div>
      <div className={classes.ForecastDay__dayDate}>
        {date.getDate()} {months[date.getMonth()].toLowerCase()}
      </div>
      <div className={classes.ForecastDay__dayWeatherIcon}>
        <img src={data.day.condition.icon}/>
      </div>
      <div className={classes.ForecastDay__dayTemp}>
        <span className={classes.ForecastDay__maxTemp}>{Math.round(data.day.maxtemp_c)}°</span>
        <span className={classes.ForecastDay__minTemp}>{Math.round(data.day.mintemp_c)}°</span>
      </div>
      <div className={classes.ForecastDay__dayWeather}>
        {data.day.condition.text}
      </div>
    </div>
  )
}

export default ForecastDay