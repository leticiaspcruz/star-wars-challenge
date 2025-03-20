import { Character, Planet } from "@/interfaces/swapi";

export const getIdFromUrl = (item: Character | Planet | string) => {
  if (!item) return;

  const url = typeof item === 'string' ? item : item.url;

  return url.split('/').filter(Boolean).pop();
};