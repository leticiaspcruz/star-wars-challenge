import React, { useEffect, useState } from 'react';
import { SectionList, Breadcrumb, Container, Banner } from '@/components';
import { Character, Planet } from '@/interfaces/swapi';
import { BannerFavorites } from '@/assets';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<(Character | Planet)[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const breadcrumbItems = [
    { name: 'home', href: '/' },
    { name: 'meus favoritos', href: '/favorites' },
  ]

  return (
   <>
    <Banner
    imageUrl={BannerFavorites}
    altText="Meus favoritos"
    text="Meus favoritos"
  />
    <Container>
      <Breadcrumb items={breadcrumbItems} />
      <SectionList
        items={favorites}
        isLoading={false}
        isError={false}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        itemType="favorites"
        usePagination={false}
        useTitle={false}
      />
    </Container>
   </>
  );
}

export default FavoritesPage;