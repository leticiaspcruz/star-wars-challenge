import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

const getCharacters = async (search: string = '') => {
  try {
    const { data } = await api.get('people/', {
      params: {
        search,
      },
    });
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    throw new Error('Erro ao buscar personagens');
  }
};

export default getCharacters;