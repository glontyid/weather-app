import React from 'react';
import src from "../../assets/preloader/Rolling-1s-200px.svg"

const Preloader = () => {
  return (
    <div className="Preloader">
      <img src={src} alt="preloader"/>
    </div>
  )
}

export default Preloader