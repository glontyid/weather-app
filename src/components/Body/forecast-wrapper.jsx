import React from "react";
import ForecastDay from "./forecast-day/forecast-day";
import classes from "./forecast-wrapper.module.css";
import {declOfNum} from "../../helpers/helpers";

const ForecastWrapper = ({forecast: {forecastday}}) => {
  return (
    <div className={classes.Body}>
      <div className={classes.Body__title}>
        Прогноз на {forecastday.length} {declOfNum(forecastday.length)}
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