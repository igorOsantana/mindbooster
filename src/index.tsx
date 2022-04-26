import React from 'react';
import ThemeContext from './contexts/theme';
import Navigator from './navigations';

const App = () => {
  return (
    <ThemeContext>
      <Navigator />
    </ThemeContext>
  );
};

export default App;
