import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import Details from '../Components/Details';
import { WeatherContext } from '../Context/WeatherContext';

const City = () => {
    const {id} = useParams();
    const {loading,getCityData} = useContext(WeatherContext)
    
    return (
        <div>
            {
                loading ? <Loading/> : <Details id={id}/>
            }
        </div>
    )
}

export default City
