import React from 'react';
import {
  StyledSearch,
  StyledForm,
  StyledSearchInput,
  StyledSearchLocation,
  StyledSearchInfo,
} from '../styled/Search';

const Search = ({ setText, setLocation, text, location }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <StyledSearch>
      <StyledForm onSubmit={(e) => handleSubmit()}>
        <StyledSearchInput>
          <i className='fas fa-search' />
          <input
            type='text'
            placeholder='Filter by text..'
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </StyledSearchInput>

        <StyledSearchLocation>
          <i className='fas fa-map-marker-alt' />
          <input
            type='text'
            placeholder='Filter by location..'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </StyledSearchLocation>

        <StyledSearchInfo>
          <input type='checkbox' />
          <p>Full Time Only</p>

          <button>Search</button>
        </StyledSearchInfo>
      </StyledForm>
    </StyledSearch>
  );
};

export default Search;
