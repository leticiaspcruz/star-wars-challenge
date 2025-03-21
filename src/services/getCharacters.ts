import axios from 'axios';
import { Character, SwapiResponse } from '@/interfaces/swapi';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

const getCharacters = async (search: string = '', page: number = 1): Promise<SwapiResponse<Character>> => {
  try {
    const { data } = await api.get<SwapiResponse<Character>>('people/', {
      params: {
        search,
        page,
      },
    });

    return data;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    throw new Error('Erro ao buscar personagens');
  }
};

export default getCharacters;
