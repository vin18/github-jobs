import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { Global } from './styled/Global';
import { theme } from './styled/Theme';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Job from './pages/Job';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    async function fetchJobs() {
      const response = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://jobs.github.com/positions.json?&description=${text}`
        )}`
      );
      setJobs(JSON.parse(response.data.contents));
      console.log(JSON.parse(response.data.contents));
    }
    fetchJobs();
  }, []);

  const handleSearch = (text) => {
    const filteredJobs = jobs.filter((job) =>
      job.company.toLowerCase().trim().includes(text.toLowerCase())
    );
    console.log(filteredJobs);
    setJobs(filteredJobs);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global />
        <Switch>
          <Route path='/' exact>
            <Home
              jobs={jobs}
              setText={setText}
              text={text}
              handleSearch={handleSearch}
            />
          </Route>

          <Route path='/job/:jobId' exact>
            <Job />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
