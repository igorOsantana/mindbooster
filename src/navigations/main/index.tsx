import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useKeyboard } from '@react-native-community/hooks';

import HomeNavigator from '../../navigations/home';

import RegisterScreen from '../../screens/register';
import LoginScreen from '../../screens/login';

import Header from '../../components/header';
import { RootAuthStackParamList } from './types';

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } =
    createNativeStackNavigator<RootAuthStackParamList>();

  const { keyboardShown } = useKeyboard();

  return (
    <Navigator>
      <Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTransparent: true,
          headerTitle: keyboardShown ? '' : Header,
          headerBackTitleVisible: false,
        }}
      />
      <Screen
        name="Home"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default MainNavigator;
