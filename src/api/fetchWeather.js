export const fetchWeather = async (query) => {
	const key = "125780f31dfebf90110301a1b81bfe1d";
	const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${key}`;
	const response = await fetch(baseURL);
	const json = await response.json();
  return json
};
