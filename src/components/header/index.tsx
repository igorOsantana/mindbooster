import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo, { Props } from '../logo';

const Header: React.FC<Props> = ({ size = 'small' }) => {
  const {
    colors: { text },
  } = useTheme();
  const styles = makeStyles(text);
  return (
    <View style={styles.header}>
      <Logo size={size} />
      <Text style={styles.brand}>Mind Booster</Text>
    </View>
  );
};

export default Header;

export const makeStyles = (color: string) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    brand: {
      fontSize: 20,
      fontWeight: 'bold',
      color,
    },
  });
