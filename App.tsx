import React from 'react';
import Navigation from '@navigation/Navigation';
import {UnistylesProvider} from 'react-native-unistyles';
import {defaultTheme} from './src/unistyles/unistyles';

const App = () => {
  return (
    <UnistylesProvider theme={defaultTheme}>
      <Navigation />
    </UnistylesProvider>
  );
};

export default App;
