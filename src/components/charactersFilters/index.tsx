import React from 'react';
import { useFormik } from 'formik';
import { Character } from '@/interfaces/swapi';
import { Select } from '@/components';
import * as S from '@/shared/filtersStyles';

interface CharacterFiltersProps {
  onChangeFilters: (filters: Partial<Character>) => void;
  currentFilters: Partial<Character>;
  characters: Character[];
}

const CharacterFilters = ({ onChangeFilters, currentFilters, characters }: CharacterFiltersProps) => {
  const formik = useFormik({
    initialValues: currentFilters,
    enableReinitialize: true,
    onSubmit: values => {
      onChangeFilters(values);
    },
  });

  const handleReset = () => {
    formik.resetForm();
    onChangeFilters({});
  };

  const getUniqueValues = (key: keyof Character) => {
    const values = characters.map(character => character[key]).filter(Boolean);
    return Array.from(new Set(values.flat()));
  };

  const filterFields: { key: keyof Character; label: string }[] = [
    { key: 'name', label: 'Name' },
    { key: 'gender', label: 'Gender' },
    { key: 'hair_color', label: 'Hair color' },
  ];

  return (
    <S.Container>
      <S.FormContainer onSubmit={formik.handleSubmit}>
        {filterFields.map(field => (
          <Select
            key={field.key}
            id={field.key}
            name={field.key}
            label={field.label}
            value={formik.values[field.key] || ''}
            options={getUniqueValues(field.key)}
            onChange={formik.handleChange}
            dataTestId={`select-${field.key}`}
          />
        ))}
        <S.Wrapper>
          <S.FilterButton type="submit" data-testid="filter-button-apply-filter">
            Apply filter
          </S.FilterButton>
          <S.FilterButton type="button" onClick={handleReset} data-testid="filter-button-reset-filter">
            Reset filter
          </S.FilterButton>
        </S.Wrapper>
      </S.FormContainer>
    </S.Container>
  );
};

export default CharacterFilters;
