import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

const getPlanets = async (search: string = '') => {
  try {
    const { data } = await api.get('planets/', {
      params: {
        search,
      },
    });
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar planetas:', error);
    throw new Error('Erro ao buscar planetas');
  }
};

export default getPlanets;
