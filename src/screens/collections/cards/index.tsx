import React from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../../components/input';
import Button from '../../../components/button';
import Card from '../../../components/card';

import { dataCards } from '../../../database/cards';
import { CollectionScreenProps } from '../../../navigations/collections/types';

const CollectionItemScreen: React.FC<CollectionScreenProps> = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView>
          <Input label="Filtro" />
          <View style={styles.btnPlayView}>
            <Button success>Jogar!</Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataCards.map(card => (
          <Card key={card.id} data={card} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionItemScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 20,
  },
  btnPlayView: {
    alignSelf: 'center',
    marginVertical: 10,
    marginTop: 15,
    minWidth: '40%',
  },
});
