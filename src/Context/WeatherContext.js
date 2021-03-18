import axios from "axios";
const {useState, createContext, useEffect } = require("react");
export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
    const [cityIds, setCityIds] = useState([5128581,2643743,745044,1261481,1850147]);
    const [forecasts,setForecasts] = useState([]);
    const [loading,setLoading] = useState(true)
    const fetchCityData = async (id) => {
        
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=bae8b743a044835a3647e4e03e901110&units=metric`);
        const {city,list} = await res.data;
        return res.data;
    }

    const getCityData=async (id)=> {
        
        const find = forecasts.find(forecast => forecast.city.id===parseInt(id))
        console.log('getdata'+find);
       try {
            if(find === undefined)
            {   
                console.log('not found');
                const data = await fetchCityData(id);
                console.log(data)
                setForecasts(forecasts =>[...forecasts,data])
            }
            return(true)
       } catch (error) {
           return(false)
       }
    }
    useEffect( () => {
        setLoading(true)
        const fetchdata = () => {
            Promise.all(
                cityIds.map(async (cityId) => await fetchCityData(cityId))
            ).then(data=>setForecasts(data));
       }
       fetchdata();
       setLoading(false)
    } ,[])

    return(
        <WeatherContext.Provider value={{loading,forecasts,getCityData}} >
            {props.children}
        </WeatherContext.Provider>
    )
}
export default WeatherContextProvider;
