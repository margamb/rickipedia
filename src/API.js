const CHARACTERS_ENDPOINT = 'https://rickandmortyapi.com/api/character';
const LOCATIONS_ENDPOINT = 'https://rickandmortyapi.com/api/location';

const rickMortyAPI = {
  getCharacters: async function fetchCharacters() {
    const res = await fetch(CHARACTERS_ENDPOINT);
    const data = await res.json();
    return data.results;
    // return fetch(charachtersUrl).then((res) => res.json());
  },

  getLocation: async function fetchCharacters() {
    const res = await fetch(LOCATIONS_ENDPOINT);
    const data = await res.json();
    return data.results;
  },
};

export default rickMortyAPI;
