import axios from 'axios';

const API_KEY = '240b9c5b460aa0069d113aa25dde97f8';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+API_KEY;

export const fetchWeather = (city) => {

	const url = `${API_URL}&q=${city},in`;

	const request = axios.get(url);

	return {
		type: 'FETCH_WEATHER',
		payload: request
	}
};