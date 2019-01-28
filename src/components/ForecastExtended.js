import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

//const days = [
   //'Lunes',
   //'Martes',
   //'Miercoles',
   //'Jueves',
   //'Viernes',
   //'Sabado',
   //'Domingo',
//]

//const data = {
   //temperature: 10,
   //humidity: 10,
   //weatherState: 'normal',
   //wind: 'normal',
//}

export const api_key = "8c03c5e18745e9f97a7d3c55bd5a6dc9";
export const url = "http://api.openweathermap.org/data/2.5/forecast";




class ForecastExtended extends Component {
   constructor(){
      super();

      this.state = {
         forecastData: null
      }
   }

   componentDidMount() {
      const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`

      fetch(url_forecast)
         .then( res => res.json() )
         .then( weather_data => {
            const forecastData = transformForecast(weather_data);
            console.log(forecastData)
            this.setState({
               forecastData 
            })
         })
   }

   renderForecastItemDays( forecastData ){
     return forecastData.map( forecast =>  ( <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={ forecast.weekDay } hour={ forecast.hour } data={ forecast.data } /> ))
   }

   renderProgress = () => {
      return "cargando pronostico extendido";
   }

   render(){
      const { city } = this.props;
      const { forecastData } = this.state;
      return (
         <div>
            <h2 className="forecast-title">
               Pronostico extendido para { city }
            </h2>
               { forecastData ? this.renderForecastItemDays( forecastData ) : this.renderProgress()}
         </div>
      )
   }
}

ForecastExtended.propTypes = {
   city: PropTypes.string.isRequired,
}

export default ForecastExtended;
