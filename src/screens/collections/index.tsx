import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MyCollectionsScreenProps } from '../../navigations/collections/types';
import CardCollection from '../../components/collection';
import Fab from '../../components/fab';

import { collectionsData } from '../../database/collections';

const MyCollectionsScreen: React.FC<MyCollectionsScreenProps> = ({
  navigation,
}) => {
  const goToCollection = ({ id, name }: { id: string; name: string }) => {
    navigation.push('Collection', { id, name });
  };

  return (
    <SafeAreaView style={styles.flex1}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {collectionsData.map(({ id, name, imgUrl }) => {
          return (
            <CardCollection
              key={id}
              id={id}
              name={name}
              imgSource={imgUrl}
              onPress={() => goToCollection({ id, name })}
            />
          );
        })}
      </ScrollView>
      <Fab icon="plus" />
    </SafeAreaView>
  );
};

export default MyCollectionsScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  wrapper: {
    padding: 20,
    flex: 1,
  },
});
