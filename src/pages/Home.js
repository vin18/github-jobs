import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import { StyledHome } from '../styled/Home';
import { Container } from '../styled/Utils';
import Jobs from '../components/Jobs';

const Home = ({ jobs, setText, setLocation, text, location }) => {
  return (
    <StyledHome>
      <Navbar />
      <Container>
        <Search
          setText={setText}
          setLocation={setLocation}
          text={text}
          location={location}
        />
      </Container>
      <Jobs jobs={jobs} />
    </StyledHome>
  );
};

export default Home;
