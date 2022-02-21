import React from "react";

const WeatherLocation = ({weather}) => {
	return (
		<div className="location">
			<h2 className="location__name">
        <span>{weather.name}</span>
        <sup>{weather.sys.country}</sup>
      </h2>
			<div className="location__temp">
				{Math.round(weather.main.temp)}
				<sup>&deg;C</sup>
			</div>
		</div>
	);
};

export default WeatherLocation;
