import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

import MyColletionsScreen from '../../screens/collection';

import CustomDrawerContent from '../../components/drawer';

import { RootDrawerParamList } from './types';

const HomeNavigator: React.FC = () => {
  const { Navigator, Screen } = createDrawerNavigator<RootDrawerParamList>();

  const { colors } = useTheme();

  return (
    <Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.text,
        headerTitleAlign: 'left',
        drawerActiveTintColor: colors.notification,
      }}>
      <Screen
        name="Collections"
        component={MyColletionsScreen}
        options={{
          headerTitle: 'Minhas coleções',
          drawerLabel: 'Minhas coleções',
          drawerIcon: ({ color }) => (
            <IconButton icon="image-multiple" color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default HomeNavigator;
