import { Character } from "@/interfaces/swapi";

export const mockCharacters: Character[] = [
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    birth_year: '41.9BBY',
    gender: 'male',
    url: 'https://swapi.dev/api/people/4/',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: ['https://swapi.dev/api/films/1/']
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    birth_year: '19BBY',
    gender: 'female',
    url: 'https://swapi.dev/api/people/5/',
    homeworld: 'https://swapi.dev/api/planets/2/',
    films: ['https://swapi.dev/api/films/1/']
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    birth_year: "52BBY",
    gender: "male",
    url: "https://swapi.dev/api/people/6/",
    homeworld: 'https://swapi.dev/api/planets/3/',
    films: ['https://swapi.dev/api/films/1/']
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    birth_year: "47BBY",
    gender: "female",
    url: "https://swapi.dev/api/people/7/",
    homeworld: 'https://swapi.dev/api/planets/3/',
    films: ['https://swapi.dev/api/films/1/']
  },
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    birth_year: '19BBY',
    gender: 'male',
    url: 'https://swapi.dev/api/people/1/',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: ['https://swapi.dev/api/films/1/']
  }
];
