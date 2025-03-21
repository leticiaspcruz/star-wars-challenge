const useFavorites = () => {
    const key = 'sw-favorites';
    const getFavorites = () => typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(key) || '[]') : null;
  
    const addFavorite = (item: { id: string; [key: string]: string }) => {
      const current = getFavorites();
      const updated = [...current, item];
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(updated));
      }
    };
  
    const removeFavorite = (id: string) => {
      const current = getFavorites();
      const updated = current.filter((fav: { id: string }) => fav.id !== id);
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(updated));
      }
    };
  
    return { getFavorites, addFavorite, removeFavorite };
  };
  
export default useFavorites;