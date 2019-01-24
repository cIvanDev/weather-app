import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
   <div>
      <WeatherLocation city={"Zacatecas"}/>
      <WeatherLocation city={"Buenos aires"}/>
      <WeatherLocation city={"Veracruz"}/>
      
   </div>
);

export default LocationList;
