import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import { Container } from '../styled/Utils';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Search />
      </Container>
    </div>
  );
};

export default Home;
