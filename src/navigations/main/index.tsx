import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeNavigator from '../home';

import RegisterScreen from '../../screens/register';
import LoginScreen from '../../screens/login';

import Header from '../../components/header';
import { MainNativeStackParamList } from './types';

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } =
    createNativeStackNavigator<MainNativeStackParamList>();

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
          headerTitle: Header,
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
