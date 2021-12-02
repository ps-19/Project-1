import React from "react";
import "./Display.css";

function Display({data,data2}) {
  
  console.log(data2);

  var a=[],b=[],c=[],d=[],e=[],f=[],g=[],h=[],k=[];
  for(var i=0;i<40;i++){
    a[i]=data2.list[i].dt_txt;
    b[i]=data2.list[i].main.humidity;
    c[i]=data2.list[i].main.temp;
    d[i]=data2.list[i].main.temp_max;
    e[i]=data2.list[i].main.temp_min;
    f[i]=data2.list[i].main.pressure;
    g[i]=data2.list[i].main.sea_level;
    h[i]=data2.list[i].weather[0].main;
    k[i]=data2.list[i].weather[0].description;
    // a.push([i,data2.list[i].dt_txt]);
    // a.push([i,data2.list[i].main.humidity]);
    // a.push([i,data2.list[i].main.temp]);
    // a.push([i,data2.list[i].main.temp_max]);
    // a.push([i,data2.list[i].main.temp_min]);
    // a.push([i,data2.list[i].main.pressure]);
    // a.push([i,data2.list[i].main.sea_level]);
    // a.push([i,data2.list[i].weather[0].main]);
    // a.push([i,data2.list[i].weather[0].description]);
  }
    
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";


  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}. Weather
            </span>
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>


            <h1>
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>

            <span className="weather-main">{data.weather[0].main}</span>
            <img className="weather-icon" src={iconurl} alt="" srcSet="" />
            <span className="weather-description">
              {" "}
              {data.weather[0].description}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr>
                  <td>
                    <h4>High/Low</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
                <div>
                  <h3 className="title-2">Future Predictions using OpenWeatherMap API:</h3>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[0].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[0].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[0].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[0].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[0].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[0].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[0].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[0].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[0].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[1].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[1].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[1].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[1].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[1].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[1].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[1].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[1].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[1].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[2].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[2].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[2].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[2].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[2].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[2].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[2].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[2].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[2].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[3].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[3].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[3].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[3].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[3].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[3].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[3].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[3].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[3].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[4].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[4].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[4].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[4].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[4].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[4].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[4].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[4].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[4].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[5].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[5].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[5].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[5].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[5].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[5].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[5].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[5].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[5].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[6].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[6].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[6].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[6].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[6].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[6].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[6].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[6].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[6].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[7].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[7].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[7].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[7].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[7].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[7].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[7].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[7].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[7].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[8].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[8].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[8].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[8].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[8].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[8].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[8].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[8].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[8].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[9].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[9].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[9].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[9].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[9].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[9].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[9].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[9].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[9].weather[0].description)}</li>
                        </ul>
                    </span>
                    <span className="card">
                        <h4>Date And Time: {(data2.list[10].dt_txt)}</h4>  
                        <ul className="points">
                          <li>Humidity: {(data2.list[10].main.humidity)}</li>
                          <li>Expected Temperature: {(data2.list[10].main.temp)}</li>
                          <li>Max Temperature: {(data2.list[10].main.temp_max)}</li>
                          <li>Min Temperature: {(data2.list[10].main.temp_min)}</li>
                          <li>Expected Pressure: {(data2.list[10].main.pressure)}</li>
                          <li>Expected Sea-Level: {(data2.list[10].main.sea_level)}</li>
                          <li>Weather Main: {(data2.list[10].weather[0].main)}</li>
                          <li>Weather Description: {(data2.list[10].weather[0].description)}</li>
                        </ul>
                    </span>
                    
                </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default Display;
