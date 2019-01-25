import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
   "Zacatecas",
   "Buenos aires",
   "Veracruz",
   "Barcelona",
   "Tokio",
   "Paris",
   "Washington",
];

class App extends Component {
   handleSelectionLocation = city => {
      console.log("handleSelectionLocation::"+city)   
   };

  render() {
    return (
      <div className="App">
         <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
      </div>
    );
  }
}

export default App;
