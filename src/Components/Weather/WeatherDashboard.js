import React, {useState, useEffect} from 'react'
import CurrentWeather from './CurrentWeather'
import WeatherHeader from './WeatherHeader'
import DailyWeather from './DailyWeather'
import HourlyWeather from './HourlyWeather'
import WeatherService from './Service/WeatherService'

function WeatherDashboard()
{
    let geoLoc = { lat : '', long : '' };
    const [location, setLocation] = useState(geoLoc);
    const [weather, setWeather] = useState({current : {}, hourly : [], daily : []});
    const [reload, setReload] = useState(false);
    let count = 0;
    useEffect(()=>{
        PopulateWeatherData();
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     if(position)
        //     {
        //         setLocation({ lat : position.coords.latitude, long : position.coords.longitude }) 
        //         //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=false&key=key
        //         const objWeatherService = new  WeatherService();
        //         objWeatherService.GetWeatherReportByLatLong({ lat : position.coords.latitude, long : position.coords.longitude }, 
        //             (response)=>{
        //                 count++;
        //                 setWeather({current : response.current, hourly : response.hourly, daily : response.daily});
        //         });
        //     }
        // });
    }, [weather.daily.length]);

    const PopulateWeatherData = (val)=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            if(position)
            {
                setLocation({ lat : position.coords.latitude, long : position.coords.longitude }) 
                //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=false&key=key
                const objWeatherService = new  WeatherService();
                objWeatherService.GetWeatherReportByLatLong({ lat : position.coords.latitude, long : position.coords.longitude }, 
                    (response)=>{
                        count++;
                        setWeather({current : response.current, hourly : response.hourly, daily : response.daily});
                });
            }
        });
    }
    
    return(<>
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
                <div className="card">
                    <WeatherHeader></WeatherHeader>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <CurrentWeather callBack={(val)=> PopulateWeatherData(val)} value={ { current : weather.current, daily : weather.daily }}></CurrentWeather>
                        </li>
                        <li className="list-group-item">
                            <DailyWeather  value={ { daily : weather.daily }}></DailyWeather>
                        </li>
                        <li className="list-group-item">
                            <HourlyWeather value={ { hourly : weather.hourly }}></HourlyWeather>
                        </li>
                    </ul>
                    
                    {/* <div className="card-header" style={headerCss}>
                        <i className="fa fa-clock-o" aria-hidden="true" style={{ fontSize:'1.5em' }}></i>
                        &nbsp;<span style={{ fontSize:'1.3em' }}>Digital Clock</span>
                    </div>
                    <div className="card-body justify-content-center" style={ { display: "grid" }}>
                        <div>
                            <label className={style.switch} style={{ fontSize:'0.6em' }}>
                                <input id="chkDate" type="checkbox" onChange={ toggleButtonChange }></input>
                                <span className={style.slider}></span>
                            </label>
                            &nbsp;<i className="fa fa-calendar fa-lg" style={{ fontSize:'1.1em' }}></i>
                        </div>
                        <br></br>
                        <div className={ style.mainCircle }>
                            <div className={ style.circleTime }>
                                <span >{ dtFormatted.time  } </span>
                                <br></br>
                                <span  className={ style.circleDate } style={ { display: toggleBtn }} >
                                    { dtFormatted.date }
                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="col-md-4">
            </div>
        </div>
    </>)
}

export default WeatherDashboard;