import React, { useState, useEffect } from 'react';
import axios from 'axios';
import halifax from './Halifax.jpg'
import './MyTown.css';

const MyTown = () => {
  const [townWeather, setTownWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?lat=44.651070&lon=-63.582687&appid=6ed9d34bcb70d9cabbc5f89d78e1066c&units=metric'
        ); 
        setTownWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  let weatherIcon;
  if (townWeather) {
    const temp = townWeather.main.temp;
    if (temp <= 10) {
      weatherIcon = 'cold.png';
    } else if (temp > 10 && temp < 20) {
      weatherIcon = 'mild.png';
    } else {
      weatherIcon = 'sunny.png';
    }
  }
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };
  return (
    
    <div className="my-town-container">
      <img src={halifax} className="my-town-image" alt="Halifax" />
      <h1>I live in Halifax, NS</h1>
      <p className="my-town-description">Halifax is a city situated on the East Coast of Canada in the Maritime province of Nova Scotia.</p>
      <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />
      {townWeather && (
        <div>
          <h1>{townWeather.name}</h1>
          <p className="temperature">{`Temperature: ${
            isCelsius
              ? `${townWeather.main.temp}°C`
              : `${(townWeather.main.temp * 9) / 5 + 32}°F`
          }`}</p>
          <button onClick={toggleTemperatureUnit} className="toggle-button">
            Change to {isCelsius ? '°F' : '°C'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MyTown;
