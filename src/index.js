import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './js/fetchCountries';
import makeCountriesMarkup from './components/makeCountriesMarkup';
import makeCountryInfoMarkup from './components/makeCountryInfoMarkup';

const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

const onInput = e => {
  e.preventDefault();
  const countries = e.target.value.trim();
  if (!countries) {
    clearMarkup();
    return;
  }
  fetchCountries(countries).then(renderCountries).catch(onError);
};

function renderCountries(data) {
  if (data.length === 1) {
    clearMarkup();
    const markup = makeCountryInfoMarkup(data);
    refs.info.innerHTML = markup;
    return;
  }
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  }
  clearMarkup();
  const markup = makeCountriesMarkup(data);
  refs.list.innerHTML = markup;
}

function clearMarkup() {
  refs.list.innerHTML = '';
  refs.info.innerHTML = '';
}

function onError() {
  clearMarkup();
  Notify.failure('Oops, there is no country with that name');
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
