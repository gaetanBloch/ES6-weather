import * as ELEMENTS from './modules/elements.js';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', () => {
  const cityName = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
  if (cityName.length === 0) {
    return alert('Please enter a city name');
  }
});
