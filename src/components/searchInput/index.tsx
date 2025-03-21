
import { ChangeEvent, useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import * as S from './styles';
interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, placeholder }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [debouncedValue] = useDebounce(inputValue, 500);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue, onSearch]);

  return (
    <S.Container>
      <S.SearchContainer>
        <S.Search
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />
        <SearchIcon />
      </S.SearchContainer>
    </S.Container>
  );
};

export default SearchInput;
