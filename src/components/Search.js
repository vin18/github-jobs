import React from 'react';
import {
  StyledSearch,
  StyledForm,
  StyledSearchInput,
  StyledButton,
} from '../styled/Search';

const Search = ({ setText, text, handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(text);
  };

  return (
    <StyledSearch>
      <StyledForm onSubmit={handleSubmit}>
        <StyledSearchInput>
          <i className='fas fa-search' />
          <input
            type='text'
            placeholder='Filter by text..'
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </StyledSearchInput>

        <StyledButton>Search</StyledButton>
      </StyledForm>
    </StyledSearch>
  );
};

export default Search;
