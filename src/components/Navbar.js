import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../styled/Navbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>
        <Link to='/'>DevJobs</Link>
      </h1>
    </StyledNavbar>
  );
};

export default Navbar;
