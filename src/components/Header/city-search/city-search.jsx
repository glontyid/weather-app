import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getSelectedCityWeather} from "../../../redux/actions";
import classes from "./city-search.module.css";

const CitySearch = () => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState('')

  function changeInput(event) {
    setSearchPhrase(event.target.value)
  }

  function submitForm(e) {
    e.preventDefault()

    if (searchPhrase.length > 0) {
      dispatch(getSelectedCityWeather(searchPhrase))
      setSearchPhrase('');
    } else {
      alert('Введите название города')
    }
  }

  return (
    <form className={classes.citySearch} onSubmit={(e) => submitForm(e)}>
      <input type="text" className={classes.citySearch__text} placeholder="Поиск..." value={searchPhrase} onChange={(e) => changeInput(e)}/>
      <input type="submit" className={classes.citySearch__submit} value="Поиск"/>
    </form>
  )
}

export default CitySearch