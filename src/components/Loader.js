import React from 'react';
import { StyledSpinner, StyledSpinnerRing } from '../styled/Loader';

function Loader() {
  return (
    <StyledSpinner>
      <StyledSpinnerRing>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyledSpinnerRing>
    </StyledSpinner>
  );
}

export default Loader;
