import './sass/main.scss';

const debounce = require('lodash.debounce');
const searchForm = document.getElementById("search-form");
const URL = 'https://restcountries.eu/rest/v2/name/';

searchForm.addEventListener('input', debounce((e) => {
    e.preventDefault();
    let countryName = e.target.value.toLowerCase();
    fetch(URL + countryName).then(r => r.json()).then(console.log);
    

}, 500));


