import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from '../../screens/register';
import LoginScreen from '../../screens/login';

import Header from '../../components/header';
import { RootAuthStackParamList } from './types';

const AuthNavigator: React.FC = () => {
  const { Navigator, Screen } =
    createNativeStackNavigator<RootAuthStackParamList>();

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
    </Navigator>
  );
};

export default AuthNavigator;
