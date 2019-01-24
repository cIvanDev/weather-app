import React, { Component } from 'react';
import { api_weather } from './../../constants/api_url';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {
   constructor(){
      super();
      this.state = {
         city: "Zacatecas",
         data: null,
      };

      console.log("constructor");
   }

   componentDidMount() {
      console.log("componentDidMount");
      this.handleUpdateClick(); 
   }

   componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate");
   }

   handleUpdateClick = () => {
      fetch(api_weather)
         .then( resolve => {
            return resolve.json();
         })
         .then( data => {
            console.log("realizando handleUpdateClick")
            const newWeather = transformWeather(data);

            //debugger;
            this.setState({ data: newWeather })
         });

   }

   render(){
      console.log("render");
      const { city, data } = this.state;

      return(
         <div className="weatherLocationCont">
            <Location city={city}></Location>
            {data ? <WeatherData data={data}></WeatherData> : "Cargando..." }
         </div>
      )
   }

};

export default WeatherLocation;
