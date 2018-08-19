export default function FetchWeatherReducer(state = [], action) {
	switch (action.type) {
		case "FETCH_WEATHER":
			return [action.payload, ...state];
	}
	return state;
}