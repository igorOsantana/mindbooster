import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const Link: React.FC = ({ children }) => {
  return (
    <Button mode="text">
      <Text style={styles.link}>{children}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default Link;
