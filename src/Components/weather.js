import React, { useState } from 'react';
import Display from './Display';
import './weather.css';

function Weather() {
    const [weather,setWeather] = useState([]);
    const [forecast,setForecast] = useState([]);
    const  [ loaded , setLoaded] = useState(false);
    // const [value,setValue] = useState([]);
    
    const [form,setform]=useState({
        city: "",
        country: ""
    });
    const handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city"){
            setform({...form, city: value});
        }
        if(name === "country"){
            setform({...form, country: value});
        }
    }

    async function weatherData(e){
        e.preventDefault();
        if(form.city === "" || form.country===""){
            alert("Enter Values");
        }
        else{
            const API_KEY = "9d1619b463c902d5357a1cf23621ccba";
            const url2 = 'https://api.openweathermap.org/data/2.5/weather?q='+form.city+','+form.country+'&appid='+API_KEY;
            // console.log(url2);

            const data = await fetch(url2)
            .then(response => response.json())
            .then(jsondata => jsondata);
            
            const url3="http://api.openweathermap.org/data/2.5/forecast?q="+form.city+"&appid="+API_KEY;
            // console.log(url3);
            
            const fdata = await fetch(url3)
            .then(response => response.json())
            .then(jsondata => jsondata);


            Display({ data: data , data2:fdata});
            setWeather({
                data: data
            });
            setForecast({
                data: fdata
            });
        }
    }

    async function Location(e){
        navigator.geolocation.getCurrentPosition(async function(position){
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const API_KEY = "9d1619b463c902d5357a1cf23621ccba";
            const url="https://api.openweathermap.org/data/2.5/find?lat="+latitude+"&lon="+longitude+"&cnt=1&appid="+API_KEY;

            const data2 = await fetch(url)
            .then(response => response.json())
            .then(jsondata => jsondata);

            const city = data2.list[0].name;
            const url2 = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+API_KEY;


            const data = await fetch(url2)
            .then(response => response.json())
            .then(jsondata => jsondata);

            const url3="http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+API_KEY;

            
            const fdata = await fetch(url3)
            .then(response => response.json())
            .then(jsondata => jsondata);

            Display({ data: data, data2: fdata});
            setWeather({
                data: data
            });
            setForecast({
                data: fdata
            });
            setLoaded(true);
        });
    }

    return (
        <div className="weather">
            <span className="title">Weather App</span>
            <br />
            <button className="btn-location" onClick={e=>Location()}>Locate Me</button>
            <form>
                <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)}/>
                <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)}/>
                <button className="getweather" onClick={e=> weatherData(e)}>Submit</button>
            </form>

            {
                ((weather.data !== undefined) && (forecast.data !== undefined)) ? (
                    <div>
                        <Display data={weather.data} data2={forecast.data}/>
                    </div>
                ) : null
            }

        </div>
    );
}

export default Weather
