import React from 'react'
import { Link } from 'react-router-dom';


const CityCard = ({forecast}) => {
    
    
    const currforecast = forecast.list[0];
    return (
        <div className='card'>
            <div className="card-header">
            <h1>{forecast.city.name}</h1>
            <img className='main-icon' src={`http://openweathermap.org/img/wn/${currforecast.weather[0].icon}@2x.png`} />
            <h2>{parseInt(currforecast.main.temp)} °C</h2>
            </div>
            <div className="card-body">
                <h3>{currforecast.weather[0].description}</h3>
                <h4>{parseInt(currforecast.main.temp_min)} °C | {parseInt(currforecast.main.temp_max)} °C</h4>
            </div>
            <Link to={`/city/${forecast.city.id}`} className="btn btn-main">
                DETAILS
            </Link>
        </div>
    )
}

export default CityCard
