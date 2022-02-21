import React from 'react';
import src from "../../../assets/preloader/Rolling-1s-200px.svg"
import classes from "./preloader.module.css"

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img src={src} alt="preloader"/>
    </div>
  )
}

export default Preloader