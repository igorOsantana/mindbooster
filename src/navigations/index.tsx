import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './main';

import { theme } from '../theme';

const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme.dark}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
