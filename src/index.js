import './sass/main.scss';
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
    let countryName = e.target.value.toLowerCase();

    getFetch(URL, countryName, createCountryCard, countryContainer);
  }, 500),
);

function createCountryCard(countryArray) {
  if (countryArray.length === 1) {
    return countryTpl(countryArray);
  }
  return listTpl(countryArray);
}


 import { error, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

defaultModules.set(PNotifyMobile, {});

error({
  text: 'Notice me, senpai!'
}); 

  