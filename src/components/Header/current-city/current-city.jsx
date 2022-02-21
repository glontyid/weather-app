import React from "react";
import { setCurrentTime, getCurrentWeekDay } from "../../../helpers/helpers";
import classes from "./current-city.module.css"

const CurrentCity = ({region, city, text}) => {
  const date = new Date();
  const currentDate = `${getCurrentWeekDay(date.getDay(), false)}, ${setCurrentTime(date.getHours())}:${setCurrentTime(date.getMinutes())}`;

  return (
    <div className={classes.currentCity}>
      <div className={classes.currentCity__country}>
        {region}, {city}
      </div>
      <div className={classes.currentCity__details}>
        <div className={classes.currentCity__details_date}>
          {currentDate}
        </div>
        <div className={classes.currentCity__details_weather}>
          {text}
        </div>
      </div>  
    </div>
  )
}

export default CurrentCity