import * as ELEMENTS from './modules/elements.js';
import Http from './modules/http.js';
import { WEATHER_PROXY_HANDLER, WeatherData } from './modules/weatherData.js';

const apiKey = '59a19dbe011cb571587915573c564872';

const updateWeather = (weatherData) => {
  ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
  ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
  ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

  ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
  ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
};

const fetchWeather = async () => {
  const cityName = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  if (cityName.length === 0) {
    return alert('Please enter a city name');
  }

  ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';
  ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';

  try {
    const response = await Http.fetchData(url);
    console.log(response);
    const weatherData = new WeatherData(
      response.name,
      response.weather[0].description.toUpperCase()
    );
    const weatherProxy = new Proxy(weatherData, WEATHER_PROXY_HANDLER);
    weatherProxy.temperature = response.main.temp;
    updateWeather(weatherProxy);
  } catch (error) {
    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
    alert(error);
  }
};

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', fetchWeather);
