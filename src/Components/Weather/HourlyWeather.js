import React, {useState, useEffect} from 'react'
import HourlyWeatherForecast from './HourlyWeatherForecast'

function HourlyWeather(props)
{
    //console.dir(props.value)
    const [hourlyWeather, setHourlyWeather] = useState([]);
    useEffect(()=>{
        //console.dir(hourlyWeather);
        if(props.value.hourly.length > 0)
        {
            setHourlyWeather(props.value.hourly);
        }
    }, [props.value.hourly.length]);

    return(<>
        <div >
        <h5>Hourly</h5>
        {
            hourlyWeather.map((item, index)=>{
                return (
                    <HourlyWeatherForecast key={index} value={ item }></HourlyWeatherForecast>
                )
            })           
            }
        </div>
    </>)
}

export default HourlyWeather;