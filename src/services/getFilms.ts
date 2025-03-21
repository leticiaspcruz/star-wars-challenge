import axios from 'axios';
import { Film, SwapiResponse } from '@/interfaces/swapi';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

const getFilms = async (): Promise<SwapiResponse<Film>> => {
  try {
    const { data } = await api.get<SwapiResponse<Film>>('films/');
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Error fetching movies');
  }
};

export const getFilmById = async (id: string): Promise<Film> => {
  try {
    const { data } = await api.get<Film>(`films/${id}/`);
    return data;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw new Error('Error fetching movie');
  }
};

export default getFilms;
