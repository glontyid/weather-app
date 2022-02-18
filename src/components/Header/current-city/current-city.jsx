import React from "react";
import { setCurrentTime, getCurrentWeekDay } from "../../../helpers/helpers";
import classes from "./current-city.module.css"

const CurrentCity = ({region, city, text}) => {
  const date = new Date();
  const currentDate = `${getCurrentWeekDay(date.getDay(), false)}, ${setCurrentTime(date.getHours())}:${setCurrentTime(date.getMinutes())}`;

  return (
    <div className={classes.cityWrapper}>
      <div className={classes.currentCity}>
      {region}, {city}
      </div>
      <div className={classes.currentCity__infoWrapper}>
        <div className={classes.infoWrapper__date}>
          {currentDate}
        </div>
        <div className={classes.infoWrapper__weather}>{text}</div>
      </div>  
    </div>
  )
}

export default CurrentCity