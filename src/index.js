import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { error } from '@pnotify/core/dist/PNotify.js';
import countryTpl from './templates/templateForCounry.hbs';
import listTpl from './templates/templateForListCountries.hbs';
import getFetch from './fetchCountries.js';

const debounce = require('lodash.debounce');
const searchForm = document.getElementById('search-form');
const countryContainer = document.querySelector('.container');
const URL = 'https://restcountries.eu/rest/v2/name/';

searchForm.addEventListener(
  'input',
  debounce(e => {
    e.preventDefault();
    let countryName = e.target.value.toLowerCase().trim();
    if (countryName !== '') {
      getFetch(URL, countryName).then(createCountryCard);
    }
    countryContainer.innerHTML = '';
  }, 500),
);

function createCountryCard(countryArray) {
  if (countryArray.length === 1) {
    return (countryContainer.innerHTML = countryTpl(countryArray));
  } else if (countryArray.length > 1 && countryArray.length <= 10) {
    return (countryContainer.innerHTML = listTpl(countryArray));
  }
  return logError(countryArray);
}

const logError = countryArray => {
  if (countryArray.length > 10) {
    error({
      text: 'Найдено слишком много совпадений. Пожалуйста введите более точный запрос.',
    });
  }
};
