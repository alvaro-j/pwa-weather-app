import React from "react";

import { fetchWeather } from "./api/fetchWeather";
import WeatherLocation from "./components/WeatherLocation";

const App = () => {
	const [query, setQuery] = React.useState("");
	const [weather, setWeather] = React.useState({});

	const search = async (e) => {
		if (e.key === "Enter") {
			const data = await fetchWeather(query);
			setWeather(data);
			setQuery("");
		}
	};

	return (
		<main>
			<input
				type="text"
				placeholder="Search..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyPress={search}
			/>
			{weather.main && <WeatherLocation weather={weather} />}
		</main>
	);
};

export default App;
