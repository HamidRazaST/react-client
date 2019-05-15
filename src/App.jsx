import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';

import theme from './theme';
import { Trainee } from './pages';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Trainee />
  </MuiThemeProvider>
);

export default App;
