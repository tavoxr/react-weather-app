import React from 'react';

const WeatherForm = (props) =>(

    <div className='card card-body' id="form">
        <form onSubmit={props.getWeather} >

            <div className='form-group'>
                <input className='form-control' type='text' name='city' placeholder='Your city name'  autoFocus  /> 
            </div>

            <div className='form-group'>
               <input className='form-control' type='text' name='country' placeholder='Your country name' />

            </div>
            <button className='btn btn-success btn-block'>
                Get weather
                
            </button>
        </form>

    </div>



)


export default WeatherForm;