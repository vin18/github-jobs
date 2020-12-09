import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Global } from './styled/Global';
import { theme } from './styled/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <h1>Hello, React!</h1>
    </ThemeProvider>
  );
};

export default App;
