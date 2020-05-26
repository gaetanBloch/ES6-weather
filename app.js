import * as ELEMENTS from './modules/elements.js';
import Http from './modules/http.js';
import { WEATHER_PROXY_HANDLER, WeatherData } from './modules/weatherData.js';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', () => {
  const cityName = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
  const apiKey = '59a19dbe011cb571587915573c564872';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  if (cityName.length === 0) {
    return alert('Please enter a city name');
  }
  Http.fetchData(url)
    .then(response => {
      const weatherData = new WeatherData(
        cityName,
        response.weather[0].description.toUpperCase()
      );
      const weatherProxy = new Proxy(weatherData, WEATHER_PROXY_HANDLER);
      weatherProxy.temperature = response.main.temp;
    })
    .catch(error => alert(error));
});
