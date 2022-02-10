import React from "react";
import ForecastDay from "./forecast-day/forecast-day";
import classes from "./body.module.css";

const ForecastWrapper = ({forecast: {forecastday}}) => {
  return (
    <div className={classes.Body}>
      <div className={classes.Body__title}>
        Прогноз на 10 дней
      </div>
      <div className={classes.ForecastDays}>
      { forecastday.map(item => {
         return <ForecastDay data={item} key={item.date}/>
       })
      }
      </div>
    </div>
  )
}

export default ForecastWrapper