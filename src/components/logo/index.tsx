'use-client';
import Link from 'next/link';
import Image from 'next/image';
import { LogoSvg } from '@/assets';
import * as S from './styles';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <S.Container>
        <Image src={LogoSvg} alt="Logo" width={100} height={100} />
      </S.Container>
    </Link>
  );
};

export default Logo;