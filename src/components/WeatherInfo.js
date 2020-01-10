import React from 'react';

const WeatherInfo = (props) =>{
console.log(props);
return(
    
    <div>
        {props.error&&
        <div className='alert alert-danger mt-3'>
            <p>{props.error}</p>
        </div>
        }

        {props.temperature ?
         <div className='card card-body mt-4' id='info'>
            <p>
                 Location: {props.city}, {props.country}

            </p>
            <p>
                 Temperature: {props.temperature} °C, {props.description}
            </p>
            <p>
                 Humidity: {props.humidity}
            </p>
            <p>
                 Wind Speed: {props.wind_speed} m/s
             </p>
         </div> 
     
        :
        <div className='card card-body mt-4'>
            <p>No request yet</p>

        </div>
      
        
        }

        </div>      
    




)

}


export default WeatherInfo;