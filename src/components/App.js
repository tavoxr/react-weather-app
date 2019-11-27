import React from 'react';
import WeatherInfo from './WeatherInfo';
import WeatherForm from './WeatherForm';
import {WEATHER_KEY} from '../keys';
import Navbar from '../components/Navbar';



class App extends React.Component {

  constructor(){
    super();
    this.state={
      tempeture: '',
      description: '',
      humidity: '',
      wind_speed: '',
      city:'',
      country:'',
      error:null

    }
  

  }
  

   getWeather = async (event)=>{
    event.preventDefault();
    const {city,country}= event.target.elements;

    const cityValue= city.value;
    const countryValue= country.value;

    const celcius= 'units=metric';
    const fahrenheit='units=imperial';

      if(cityValue&&countryValue){
        const API_URL= `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&${celcius}`;

    const response= await fetch(API_URL);
     const data= await response.json();
     
     



    // console.log(this.state);
    
    this.setState({
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity ,
      wind_speed: data.wind.speed,
      city:data.name,
      country: data.sys.country,
      error:null

    });
    

      }else{
        this.setState({error: 'Please enter a city and a country'})
      }

    

  }



  render(){
    return (
      <div className='container  mt-3 '>
        <Navbar/>
      <div className='container p-4'>
        
        <div className='row'>
          <div className='col-md-5 mx-auto mt-4'>
              <WeatherForm getWeather={this.getWeather} />
              <WeatherInfo {...this.state} />
          </div>
        </div>
      </div>
      </div>
    
    );


  }
  
}

export default App;
