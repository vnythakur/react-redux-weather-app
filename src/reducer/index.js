import { combineReducers } from 'redux';
import FetchWeatherReducer from './fetch-weather-reducer';


const rootReducer = combineReducers({
	weathers: FetchWeatherReducer
});

export default rootReducer;
