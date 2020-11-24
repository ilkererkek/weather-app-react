import React, { useContext } from 'react'
import {WeatherContext} from '../Context/WeatherContext'
import Loader from '../Components/Loading'
import MainList from '../Components/MainList'
const Main = () => {
    const {loading} = useContext(WeatherContext);
    return (
        <div>
           <div className="container">
               {loading ? <Loader/> : <MainList/>}
           </div>
        </div>
    )
}

export default Main
