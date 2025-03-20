import React from 'react';
import { useFormik } from 'formik';
import { Planet } from '@/interfaces/swapi';
import { Select } from '@/components';

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
    { key: 'name', label: 'Nome' },
    { key: 'climate', label: 'Clima' },
    { key: 'terrain', label: 'Terreno' },
    { key: 'gravity', label: 'Gravidade' },
    { key: 'population', label: 'População' },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
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

      <div>
        <button type="submit">
          Aplicar Filtros
        </button>
        <button
          type="button"
          onClick={handleReset}
        >
          Limpar Filtros
        </button>
      </div>
    </form>
  );
};

export default PlanetsFilters;
