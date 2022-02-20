import React from "react";

const WeatherLocation = ({weather}) => {
	return (
		<div className="location">
			<h2 className="location__name">
        <span>{weather.name}</span>
        <sup>{weather.sys.country}</sup>
      </h2>
		</div>
	);
};

export default WeatherLocation;
