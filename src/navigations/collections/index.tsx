import React, { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyColletionsScreen from '../../screens/collections';
import ColletionItemScreen from '../../screens/collections/cards';

import { CollectionsNativeStackParamList } from './types';
import { CollectionsNavigatorProps } from '../home/types';
import { getCollectionRouteName } from '../../utils';

const CollectionsNavigator: React.FC<CollectionsNavigatorProps> = ({
  navigation,
}) => {
  const { Navigator, Screen } =
    createNativeStackNavigator<CollectionsNativeStackParamList>();

  const resetHeaderTitle = useCallback(() => {
    navigation.setOptions({
      headerTitle: 'Minhas coleções',
    });
  }, [navigation]);

  const changeHeaderTitle = useCallback(
    (name: string) => {
      navigation.setOptions({
        headerTitle: name,
      });
    },
    [navigation],
  );

  return (
    <Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Screen
        name="MyCollections"
        component={MyColletionsScreen}
        listeners={() => ({
          focus: resetHeaderTitle,
        })}
      />
      <Screen
        name="Collection"
        component={ColletionItemScreen}
        listeners={({ route }) => ({
          focus: () =>
            changeHeaderTitle(getCollectionRouteName(route.params.name)),
        })}
      />
    </Navigator>
  );
};

export default CollectionsNavigator;
