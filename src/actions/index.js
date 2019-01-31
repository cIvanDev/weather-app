import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload, });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });


export const api_key = "8c03c5e18745e9f97a7d3c55bd5a6dc9";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
   return dispatch => {
      const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

      // activar en el estado un indicador de busqueda de datos
      dispatch(setCity(payload));

      return fetch(url_forecast)
         .then( res => res.json() )
         .then( weather_data => {
            const forecastData = transformForecast(weather_data);

            // modificar el estado con el resultado del promise
            dispatch(setForecastData({city: payload, forecastData}));
         });
   }
}
