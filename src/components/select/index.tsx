import React from 'react';
import * as S from './styles';
interface SelectProps {
  id: string;
  name: string;
  label: string;
  value: string | string[];
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dataTestId?: string;
}

const Select = ({ id, name, label, value, options, onChange, dataTestId }: SelectProps) => (
  <S.Wrapper>
    <label htmlFor={id}>{label}:</label>
    <S.SelectWrapper
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      data-testid={dataTestId}
    >
      <S.OptionWrapper value="">All</S.OptionWrapper>
      {options.map(option => (
        <S.OptionWrapper key={option} value={option}>
          {option}
        </S.OptionWrapper>
      ))}
    </S.SelectWrapper>
  </S.Wrapper>
);

export default Select;
