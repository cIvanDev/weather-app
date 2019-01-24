const location = "Zacatecas,mx";
const api_key = "8c03c5e18745e9f97a7d3c55bd5a6dc9";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
