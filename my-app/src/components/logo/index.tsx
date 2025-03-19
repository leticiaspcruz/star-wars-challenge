'use-client';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from '@/assets/star_wars_logo.svg';
import * as S from './styles';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <S.Container>
        <Image src={LogoSVG} alt="Logo" width={100} height={100} />
      </S.Container>
    </Link>
  );
};

export default Logo;