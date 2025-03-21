import React from 'react';
import Link from 'next/link';
import * as S from './styles';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <S.BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <S.BreadcrumbItem>
            {index < items.length - 1 ? (
              <Link href={item.href}>{item.name}</Link>
            ) : (
              item.name
            )}
          </S.BreadcrumbItem>
          {index < items.length - 1 && <S.Separator> &gt; </S.Separator>}
        </React.Fragment>
      ))}
    </S.BreadcrumbContainer>
  );
};

export default Breadcrumb;
