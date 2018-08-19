import React, {Component} from 'react';

import {connect} from 'react-redux';
import _ from 'lodash';
import Chart from '../component/Chart';

class WeatherList extends Component{


	reanderWeatherList(cityData){

		const cityName = cityData.data.city.name;
		const temp = cityData.data.list.map(weather => weather.main.temp);
		const avgTemp = _.round(_.mean(temp));

		const pressure = cityData.data.list.map(weather => weather.main.pressure);
		const avgPressure = _.round(_.mean(pressure));

		const humidity = cityData.data.list.map(weather => weather.main.humidity);
		const avgHumidity = _.round(_.mean(humidity));

		return (
			<tr key={cityName}>
				<td>{cityName}</td>
				<td>
					<Chart data={temp} color="blue" />
					<div>{avgTemp} K</div>
				</td>
				<td>
					<Chart data={pressure} color="orange" />
					<div>{avgPressure} hPa</div>
				</td>
				<td>
					<Chart data={humidity} color="green" />
					<div>{avgHumidity} %</div>
				</td>
			</tr>
		);
	}

	render() {
		return (
			<div className="container">
			  <table className="table">
			    <thead>
			      <tr>
			        <th>City</th>
			        <th>Temperature (K)</th>
			        <th>Pressure (hPa)</th>
			        <th>Humidity (%)</th>
			      </tr>
			    </thead>
			    <tbody>
			    	{this.props.weathers.map(cityData => this.reanderWeatherList(cityData))}
			    </tbody>
			  </table>
			</div>
		);
	}
}


const mapStateToProps = ({weathers}) => {
	return {weathers}
}

export default connect(mapStateToProps)(WeatherList);