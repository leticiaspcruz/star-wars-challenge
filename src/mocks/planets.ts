import { Planet } from "@/interfaces/swapi";

export const mockPlanets: Planet[] = [
  {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    population: '200000',
    url: 'https://swapi.dev/api/planets/1/',
  },
  {
    name: 'Alderaan',
    rotation_period: '24',
    orbital_period: '364',
    diameter: '12500',
    climate: 'temperate',
    gravity: '1 standard',
    terrain: 'grasslands, mountains',
    population: '2000000000',
    url: 'https://swapi.dev/api/planets/2/',
  },
  {
    name: 'Yavin IV',
    rotation_period: '24',
    orbital_period: '4818',
    diameter: '10200',
    climate: 'temperate, tropical',
    gravity: '1 standard',
    terrain: 'jungle, rainforests',
    population: '1000',
    url: 'https://swapi.dev/api/planets/3/',
  },
  {
    name: 'Hoth',
    rotation_period: '23',
    orbital_period: '549',
    diameter: '7200',
    climate: 'frozen',
    gravity: '1.1 standard',
    terrain: 'tundra, ice caves, mountain ranges',
    population: 'unknown',
    url: 'https://swapi.dev/api/planets/4/',
  },
  {
    name: 'Dagobah',
    rotation_period: '23',
    orbital_period: '341',
    diameter: '8900',
    climate: 'murky',
    gravity: 'N/A',
    terrain: 'swamp, jungles',
    population: 'unknown',
    url: 'https://swapi.dev/api/planets/5/'
  }
];
