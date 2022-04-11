import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

import MyColletionsScreen from '../../screens/collection';

import { RootDrawerParamList } from './types';

const HomeNavigator: React.FC = () => {
  const { Navigator, Screen } = createDrawerNavigator<RootDrawerParamList>();

  const { colors } = useTheme();

  return (
    <Navigator>
      <Screen
        name="Collections"
        component={MyColletionsScreen}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: colors.text,
          headerTitle: 'Minhas coleções',
          headerTitleAlign: 'left',
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
