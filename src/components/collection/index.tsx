import React, { useState } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

import ButtonAsIcon from '../button/asIcon';
import Dialog from '../dialog';

type Props = TouchableOpacityProps & {
  id: string;
  name: string;
  imgSource: ImageSourcePropType;
};

const CardCollection: React.FC<Props> = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const hideModal = () => setIsModalVisible(false);

  const onPressUpdateBtn = () => {
    showModal();
  };

  const onPressDeleteBtn = () => {
    showModal();
  };

  return (
    <>
      <TouchableOpacity style={styles.container} {...props}>
        <Image style={styles.collectionImg} source={props.imgSource} />
        <Text style={styles.collectionName}>{props.name}</Text>
        <View style={styles.btnWrapper}>
          <ButtonAsIcon
            onPress={onPressUpdateBtn}
            icon="pencil"
            color="#4472C4"
          />
          <ButtonAsIcon
            onPress={onPressDeleteBtn}
            icon="trash-can"
            color="#f00"
          />
        </View>
      </TouchableOpacity>
      <Dialog
        visible={isModalVisible}
        onDismiss={hideModal}
        onOk={hideModal}
        title="Excluir coleção"
        okText="Excluir"
        danger>
        <Text>Você tem certeza que deseja excluir essa coleção?</Text>
      </Dialog>
    </>
  );
};

export default CardCollection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 125,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  collectionImg: {
    width: 60,
    height: 60,
    overflow: 'visible',
    marginLeft: 10,
  },
  collectionName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#33ACA7',
  },
  btnWrapper: {
    justifyContent: 'space-between',
  },
});
