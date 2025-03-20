import React from 'react';

interface SelectProps {
  id: string;
  name: string;
  label: string;
  value: string | string[];  
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ id, name, label, value, options, onChange }: SelectProps) => (
  <div className="flex flex-col gap-1">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="border p-2 rounded"
    >
      <option value="">Todos</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
