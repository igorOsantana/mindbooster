import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// navigations
import AuthNavigator from './auth';
// theme
import { theme } from '../theme';

const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme.dark}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
