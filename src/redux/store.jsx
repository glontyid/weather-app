import { combineReducers, createStore, applyMiddleware } from "redux";
import { WeatherReducer } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({WeatherReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
