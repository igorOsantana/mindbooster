import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

import CollectionsNavigator from '../../navigations/collections';

import CustomDrawerContent from '../../components/drawer';

import { HomeDrawerParamList } from './types';
import { HomeNavigatorProps } from '../main/types';

const HomeNavigator: React.FC<HomeNavigatorProps> = () => {
  const { Navigator, Screen } = createDrawerNavigator<HomeDrawerParamList>();

  const { colors } = useTheme();

  const goToMyCollections = (navigation: any) => {
    navigation.navigate('MyCollections');
  };

  return (
    <Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
        drawerActiveTintColor: colors.text,
      }}>
      <Screen
        name="Collections"
        component={CollectionsNavigator}
        listeners={({ navigation }) => ({
          drawerItemPress: () => goToMyCollections(navigation),
        })}
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
