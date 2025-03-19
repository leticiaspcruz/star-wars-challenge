export interface Character {
  name: string;
  height: string;
  mass: string;
  gender: string;
  birth_year: string;
  homeworld: string;
  [key: string]: string;
}

export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  [key: string]: string;
}

export interface SwapiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
