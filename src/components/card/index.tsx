import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { baseColors, lightColors } from '../../theme/colors';

import ButtonAsIcon from '../button/asIcon';

import { DataCard } from './types';

type CardProps = {
  data: DataCard;
};

const Card: React.FC<CardProps> = ({ data }) => {
  const styles = makeStyles(baseColors.specialText);
  return (
    <View style={styles.wrapper}>
      <View style={styles.infoView}>
        <Text style={styles.label}>Frente:</Text>
        <Text numberOfLines={1} style={styles.text}>
          {data.frontText}
        </Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.label}>Verso:</Text>
        <Text numberOfLines={1} style={styles.text}>
          {data.backText}
        </Text>
      </View>
      <View style={styles.btnsView}>
        <ButtonAsIcon icon="pencil" color={lightColors.activeTab} />
        <ButtonAsIcon icon="trash-can" color={baseColors.error} />
      </View>
    </View>
  );
};

export default Card;

const makeStyles = (specialColor: string) => {
  return StyleSheet.create({
    wrapper: {
      padding: 10,
      marginVertical: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    infoView: {
      flex: 1,
      marginHorizontal: 5,
    },
    label: {
      fontSize: 12,
      color: lightColors.inactiveTab,
      marginBottom: 5,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: specialColor,
    },
    btnsView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });
};
