import * as S from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <S.Container>{children}</S.Container>
);

export default Container;
