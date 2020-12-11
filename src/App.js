import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { Global } from './styled/Global';
import { theme } from './styled/Theme';
import axios from 'axios';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    async function fetchJobs() {
      const response = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://jobs.github.com/positions.json?&description=${text}&location=${location}`
        )}`
      );
      setJobs(JSON.parse(response.data.contents));
    }
    fetchJobs();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Home
        jobs={jobs}
        setText={setText}
        setLocation={setLocation}
        text={text}
        location={location}
      />
    </ThemeProvider>
  );
};

export default App;
