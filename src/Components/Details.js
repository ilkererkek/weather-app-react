import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { WeatherContext } from '../Context/WeatherContext'
import Loading from './Loading';

const Details = ({id}) => {
    console.log(id)
    const {forecasts,getCityData} = useContext(WeatherContext);
    const forecast = forecasts.find(forecast => forecast.city.id===parseInt(id));
    const [flag,setFlag] = useState(false)
    useEffect(async ()=>{
    if(forecasts.length>1&& !forecast){
        setFlag(true);  
    }
    },[forecasts])

    

   if(flag){
       
        
        return(
           <Redirect to='/404'/>
       )
   }
   else{
      return(
        <div>
            {forecast?
                <div className="city-container container">
                    <div className="city-detail">
                        <div className="city-header">
                            <img className='main-icon' src={`http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`} />
                            <div>
                            <h1>{forecast.city.name}</h1>
                            <h3>{parseInt(forecast.list[0].main.temp)} °C</h3>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>:
                <Loading/>
            }
        </div>
      )
   }
}

export default Details
