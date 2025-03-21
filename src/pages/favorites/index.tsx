import React, { useEffect, useState } from 'react';
import { SectionList, Breadcrumb, Container, Banner } from '@/components';
import { Character, Planet } from '@/interfaces/swapi';
import { BannerFavorites } from '@/assets';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<(Character | Planet)[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavorites(storedFavorites);
    }
  }, []);

  const breadcrumbItems = [
    { name: 'home', href: '/' },
    { name: 'my favorites', href: '/favorites' },
  ]

  const isError = !favorites || favorites.length === 0;

  return (
   <>
    <Banner
    imageUrl={BannerFavorites}
    altText="My favorites"
    text="My favorites"
  />
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <SectionList
        items={favorites}
        isLoading={false}
        isError={isError}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        itemType="favorites"
        usePagination={false}
        useTitle={true}
      />
    </Container>
   </>
  );
}

export default FavoritesPage;