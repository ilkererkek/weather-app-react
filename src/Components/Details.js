import React, { useContext, useEffect, useState } from 'react'
import { WeatherContext } from '../Context/WeatherContext';

const Details = ({id}) => {
    
    console.log(id)
    const {forecasts} = useContext(WeatherContext);
    const [forecast,setForecast] = useState(null);
    const [date,setDate] = useState(new Date(Date.now()))
    const [sunTime,setSunTime] = useState({})
    useEffect(()=>{
        const data = forecasts.find(forecast=> forecast.city.id===parseInt(id));
        setForecast(data)
        if(forecast){
            const  UTCms = (date.getTime() + date.getTimezoneOffset()*60*1000);
            console.log('dsadsa')
            setDate(new Date(UTCms+forecast.city.timezone*1000));   
            setSunTime({sunset:new Date(UTCms+forecast.city.sunset*1000), sunrise:new Date(UTCms+forecast.city.sunrise*1000)})
            
        
        }
    },[forecast])
  
    return (
        <div>
            {forecast ? 
            <div className="container city-container">
                <div className="city-detail">
                    <div className="city-header">
                        <img className='detail-icon' src={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`} />
                        <div>
                            <h1>{forecast.city.name}</h1>
                            <h3>{parseInt(forecast.list[0].main.temp)} °C</h3>
                        </div>
                    </div>
                    <div className="city-sub-detail">
                        <h2>{(date.getHours()<10?'0':'') + date.getHours() }:{(date.getMinutes()<10?'0':'') + date.getMinutes() }</h2>
                    </div>
                </div>
            </div>
            
            
            
            :null}
        </div>
    )
}

export default Details

