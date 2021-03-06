import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
      font-size: 38%;
    }
  }

  body {
    background-color: ${(props) => props.theme.colors.midnight};
    color: ${(props) => props.theme.colors.grayDark};
    font-size: 1.6rem;
    height: 100vh;
    width: 100vw;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;

 
  }
`;
