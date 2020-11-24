import React, { useContext } from 'react'
import { WeatherContext } from '../Context/WeatherContext';


const CityCard = ({forecast}) => {
    
    
    const currforecast = forecast.list[0];
    return (
        <div className='card'>
            <div className="card-header">
            <h1>{forecast.city.name}</h1>
            <img className='main-icon' src={`http://openweathermap.org/img/wn/${currforecast.weather[0].icon}@2x.png`} />
            <h2>{parseInt(currforecast.main.temp)}</h2>
            </div>
            <div className="card-body">
                <h5>{currforecast.weather[0].description}</h5>
            </div>
        </div>
    )
}

export default CityCard
