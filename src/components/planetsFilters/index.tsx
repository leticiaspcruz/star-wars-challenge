import React from 'react';
import { useFormik } from 'formik';
import { Planet } from '@/interfaces/swapi';
import { Select } from '@/components';
import * as S from '@/shared/filtersStyles';
interface PlanetFiltersProps {
  onChangeFilters: (filters: Partial<Planet>) => void;
  currentFilters: Partial<Planet>;
  planets: Planet[];
};

const PlanetsFilters = ({ onChangeFilters, currentFilters, planets }: PlanetFiltersProps) => {
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

  const getUniqueValues = (key: keyof Planet) => {
    const values = planets.map(planet => planet[key]).filter(Boolean);
    return Array.from(new Set(values));
  };

  const filterFields: { key: keyof Planet; label: string }[] = [
    { key: 'name', label: 'Name' },
    { key: 'climate', label: 'Climate' },
    { key: 'terrain', label: 'Terrain' },
    { key: 'population', label: 'Population' },
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
            />
          ))}
        </S.FormContainer>
        <S.Wrapper>
        <S.FilterButton type="submit" onClick={() => formik.handleSubmit()}>
           Apply filter
        </S.FilterButton>
        <S.FilterButton
          type="button"
          onClick={handleReset}
        >
          Reset filter
        </S.FilterButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default PlanetsFilters;
