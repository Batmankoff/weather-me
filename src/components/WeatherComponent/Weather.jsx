import React, { useState, useEffect } from 'react';
import styles from './weather.module.scss';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'bd94fb7e8dd7577b84b290f0cff6bb5f';

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error('Ошибка:', error));
  }, [city]);
  console.log(weatherData);
  return (
    <div className={styles.inner}>
      {weatherData ? (
        <div className={styles.boxs}>
          <div className={styles.boxCity}>
            <h2 className={styles.city}>{weatherData.name}</h2>
          </div>
          <div className={styles.boxTemp}>
            <p className={styles.temp}>{Math.round(weatherData.main.temp)}°C</p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt='Weather Icon'
            />
          </div>

          <ul className={styles.boxDesc}>
            <li className={styles.boxDescItem}>
              <span>Влажность</span>
              <span>{weatherData.main.humidity}%</span>
            </li>
            <li className={styles.boxDescItem}>
              <span>Видимость</span>
              <span>{weatherData.visibility / 1000} км</span>
            </li>
            <li className={styles.boxDescItem}>
              <span>Давление</span>
              <span>{weatherData.main.pressure} гПа</span>
            </li>
            <li className={styles.boxDescItem}>
              <span>Ветер</span>
              <span>{Math.floor(weatherData.wind.speed)} м/с</span>
            </li>
          </ul>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default Weather;
