import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './main';

import { theme } from '../theme';
import useThemeApp from '../hooks/themeApp';

const RootNavigator = () => {
  const { currentTheme } = useThemeApp();

  const themeApp = currentTheme === 'light' ? theme.light : theme.dark;
  return (
    <NavigationContainer theme={themeApp}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
