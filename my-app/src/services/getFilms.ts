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
    console.error('Erro ao buscar filmes:', error);
    throw new Error('Erro ao buscar filmes');
  }
};

export const getFilmById = async (id: string): Promise<Film> => {
  try {
    const { data } = await api.get<Film>(`films/${id}/`);
    return data;
  } catch (error) {
    console.error('Erro ao buscar filme:', error);
    throw new Error('Erro ao buscar filme');
  }
};

export default getFilms;
