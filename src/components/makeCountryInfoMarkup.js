const makeCountryInfoMarkup = countries =>
  countries
    .map(({ name, capital, population, flags, languages }) => {
      return (countries = `<ul class="country-info__list">
        <li class='country-list__info-item'>
          <img
            class='country-list__info-img'
            src='${flags.svg}'
            alt='Flag of ${name.official}'
            width='45'
          />
          <p class='country-list__info-name'>${name.official}</p>
        </li>
        <li class="country-info__item">
          <p class="country-info__text">Capital:<span class="country-info__text-value">${capital}</span></p>
        </li>
        <li class="country-info__item">
          <p class="country-info__text">Population:<span class="country-info__text-value">${population}</span></p>
        </li>
        <li class="country-info__item">
          <p class="country-info__text">Languages:<span class="country-info__text-value">${Object.values(
            languages,
          ).join(', ')}</span></p>
        </li>
      </ul>
      `);
    })
    .join('');

export default makeCountryInfoMarkup;
