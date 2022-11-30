import axios from 'axios';
import { useState } from 'react';
import './index.css';
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
    // setLocation('');
  };

  return (
    <div className="app">
      <div className="container">
        <h1 style={{ fontSize: '3rem' }}>Welcome to MyWeatherApp</h1>
        <div className="title">Want to know the location of any city?</div>
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
        </div>
        {data.name != undefined && (
          <div>
            <div className="body">
              <div className="temp-city">
                <div className="city">{data.name}</div>
                <div className="temp">
                  {data.main ? data.main.temp : null}°F
                </div>
              </div>
              <div className="description clouds">
                {data.weather[0] ? data.weather[0].main : null}
              </div>
            </div>

            <div className="footer">
              <div className="footer-content">
                <div className="footer-details">
                  {data.main ? data.main.feels_like : null}°F
                </div>
                <div>Feels Like</div>
              </div>
              <div className="footer-content">
                <div>
                  <div className="footer-details">
                    {data.main ? data.main.humidity : null}%
                  </div>
                  <div>Humidity</div>
                </div>
              </div>
              <div className="footer-content">
                <div className="footer-details">
                  {data.main ? data.wind.speed : null}MPH
                </div>{' '}
                <div>Wind</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
