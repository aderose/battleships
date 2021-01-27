import React from 'react';

import Header from './Header';
import Game from './Game';

import { GlobalStyle } from '../style';

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
