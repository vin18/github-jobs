import React from 'react';
import {
  StyledSearch,
  StyledForm,
  StyledSearchInput,
  StyledSearchLocation,
  StyledSearchInfo,
} from '../styled/Search';

const Search = () => {
  return (
    <StyledSearch>
      <StyledForm>
        <StyledSearchInput>
          <i class='fas fa-search'></i>

          <input type='text' placeholder='Filter by text..' />
        </StyledSearchInput>

        <StyledSearchLocation>
          <i class='fas fa-map-marker-alt'></i>
          <input type='text' placeholder='Filter by location..' />
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
