import React from "react";

import { fetchWeather } from "./api/fetchWeather";

const App = () => {
	const [query, setQuery] = React.useState("");

	const search = async (e) => {
		if (e.key === "Enter") {
			const data = await fetchWeather(query);
			console.log(data);
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
		</main>
	);
};

export default App;
