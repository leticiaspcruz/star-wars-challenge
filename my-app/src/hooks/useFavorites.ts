const useFavorites = () => {
    const key = 'sw-favorites';
    const getFavorites = () => JSON.parse(localStorage.getItem(key) || '[]');
  
    const addFavorite = (item: { id: string; [key: string]: string }) => {
      const current = getFavorites();
      const updated = [...current, item];
      localStorage.setItem(key, JSON.stringify(updated));
    };
  
    const removeFavorite = (id: string) => {
      const current = getFavorites();
      const updated = current.filter((fav: { id: string }) => fav.id !== id);
      localStorage.setItem(key, JSON.stringify(updated));
    };
  
    return { getFavorites, addFavorite, removeFavorite };
  };
  
export default useFavorites;