import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import { StyledHome } from '../styled/Home';
import { Container } from '../styled/Utils';
import Users from '../components/Users';

const Home = () => {
  return (
    <StyledHome>
      <Navbar />
      <Container>
        <Search />
      </Container>
      <Users />
    </StyledHome>
  );
};

export default Home;
