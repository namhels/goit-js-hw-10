const BASE_URL = 'https://restcountries.com';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      // throw new Error(response.status);
      return Promise.reject(new Error(response.status));
    },
  );
}

export default fetchCountries;
// export { fetchCountries };
