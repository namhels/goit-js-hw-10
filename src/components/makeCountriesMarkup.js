const makeCountriesMarkup = countries =>
  countries
    .map(({ name, flags }) => {
      return (countries = `<li class='country-list__item'>
        <img
          class='country-list__img'
          src='${flags.svg}'
          alt='Flag of ${name.official}'
          width='48'
          height='48'
        />
        <p class='country-list__name'>${name.official}</p>
      </li>`);
    })
    .join('');

export default makeCountriesMarkup;
