import React, {useEffect, useState } from 'react'
import WeatherService from './Service/WeatherService'

function HourlyWeatherForecast(props)
{
    //console.dir(props.value);
    const [hourlyWeather, setDailyWeather] = useState({ time : '', temp : '', mainWeather : '', icon :''});

    useEffect(()=>{
        if(props.value.dt)
        {
            let objWeatherService =new WeatherService();
            setDailyWeather({ time: String(objWeatherService.unixTimestampToDate(props.value.dt).time),
                temp : props.value.temp, 
                mainWeather : props.value.weather[0].main, 
                icon : `http://openweathermap.org/img/wn/${props.value.weather[0].icon}.png`});
        }
    }, [props.value]);

    return(<>
        <div style={{width:'33%'}}>
            <span>{`${hourlyWeather.time.split(':')[0]}:${hourlyWeather.time.split(':')[1]}`}</span><br></br>
            <span>
                <img src={hourlyWeather.icon} alt="Logo" />
            </span><br></br>
            <span>{Math.round(hourlyWeather.temp)} °</span><br></br>
            <span>{hourlyWeather.mainWeather}</span>
        </div>
    </>)
}

export default HourlyWeatherForecast;