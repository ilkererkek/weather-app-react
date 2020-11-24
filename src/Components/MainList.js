import React, { useContext } from 'react'
import { WeatherContext } from '../Context/WeatherContext';
import CityCard from './CityCard';
import Loading from './Loading';
const MainList = () => {
    const {forecasts}= useContext(WeatherContext);
    return (
        <div className="main-list ">
           <h2>Some forecast data for you, all around the globe.</h2>
           <ul>
               {forecasts.map(forecast => <li key={forecast.city.id}><CityCard forecast={forecast}/></li>)}
           </ul>
        </div>
    )
}

export default MainList
