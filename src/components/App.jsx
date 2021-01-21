import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Game from './Game';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #111;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Game />
    </React.Fragment>
  );
};

export default App;
