import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
   CLOUD,
   //CLOUDY,
   //SUN, 
   //RAIN,
   //SNOW,
   //WINDY,
} from './../../constants/weathers';

const data = {
   temperature: 8,
   weatherState: CLOUD,
   humidity: 10,
   wind: '10 m/s',
}

class WeatherLocation extends Component {
   constructor(){
      super();
      this.state = {
         city: "Espania",
         data: data,
      };
   }


   handleUpdateClick = () => {
      console.log("actualizadu");


      this.setState({ city: 'Outra cidade'})
   }

   render(){
      const { city, data } = this.state;

      return(
         <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
         </div>
      )
   }

};

export default WeatherLocation;
