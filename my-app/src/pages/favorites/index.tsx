import React, { useEffect, useState } from 'react';
import { SectionList, Breadcrumb, Container } from '@/components';
import { Character, Planet } from '@/interfaces/swapi';

export default function Favorites() {
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
        useTitle={true}
        usePagination={false}
      />
    </Container>
  );
}
