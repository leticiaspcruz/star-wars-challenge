import axios from 'axios';
import { Planet, SwapiResponse } from '@/interfaces/swapi';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

const getPlanets = async (search: string = '', page: number = 1): Promise<SwapiResponse<Planet>> => {
  try {
    const { data } = await api.get<SwapiResponse<Planet>>('planets/', {
      params: {
        search,
        page,
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching planets:', error);
    throw new Error('Error fetching planets');
  }
};

export default getPlanets;
