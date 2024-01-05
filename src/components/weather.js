import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react'


const refresh = () => {
  window.location.reload();
}

const WeatherCard = ({weatherData}) => (
	<div className="main">
		<div className="top">
        	<p className="header">{weatherData.name}</p>
        	<Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      	</div>
		<div className="flex">
			<p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
			<p className="description">{weatherData.weather[0].main}</p>
		</div>
		<div className="flex">
			<p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
			<p className="temp">Humidity: {weatherData.main.humidity} %</p>
		</div>
  </div>
)

export default WeatherCard;
