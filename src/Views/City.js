import React, { useContext, useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Details from '../Components/Details';
import { WeatherContext } from '../Context/WeatherContext';

const City = () => {
    
    const {id} = useParams();
    const {getCityData} = useContext(WeatherContext);
    const [response,setResponse] = useState(true);
    const [loading,setLoading] = useState(true);
    useEffect( async ()=>{
         //waits for first load
        await setTimeout(()=>{},1000);
        const res = await getCityData(id);
        setResponse(res)
        setLoading(false);
    },[id]);
    

    
   if(loading){
       return(
        <div className="container load-page">
        <div className="loader">Loading...</div>
        <h1>Loading ...</h1>
        </div>
       )
   }
   else{
       return(
           <div>
               {response?<Details id={id} />:<Redirect to='/404'/>}
           </div>
       )
   }
}

export default City
