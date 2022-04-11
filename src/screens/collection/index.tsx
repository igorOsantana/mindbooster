import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';

import CardCollection from '../../components/card/collection';
import Fab from '../../components/fab';

export const data = [
  {
    id: '1',
    name: 'Objetos',
    imgUrl: require('../../assets/mock/img/objects.png'),
  },
  {
    id: '2',
    name: 'Cores',
    imgUrl: require('../../assets/mock/img/colors.png'),
  },
  {
    id: '3',
    name: 'Animais',
    imgUrl: require('../../assets/mock/img/animals.png'),
  },
  {
    id: '4',
    name: 'Adjetivos',
    imgUrl: require('../../assets/mock/img/adjectives.png'),
  },
];

const MyCollectionsScreen = () => {
  return (
    <SafeAreaView style={styles.flex1}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        {data.map(({ id, name, imgUrl }) => {
          return (
            <CardCollection key={id} id={id} name={name} imgSource={imgUrl} />
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
