import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo, { Props } from '../logo';

const Header: React.FC<Props> = ({ size = 'small' }) => {
  return (
    <View style={styles.header}>
      <Logo size={size} />
      <Text style={styles.brand}>Mind Booster</Text>
    </View>
  );
};

export default Header;

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  brand: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});
