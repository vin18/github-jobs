import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import { Global } from './styled/Global';
import { theme } from './styled/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Home />
    </ThemeProvider>
  );
};

export default App;
