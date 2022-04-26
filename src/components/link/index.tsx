import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';

const Link: React.FC = ({ children }) => {
  const {
    colors: { text },
  } = useTheme();
  const styles = makeStyles({ color: text });
  return (
    <Button mode="text">
      <Text style={styles.link}>{children}</Text>
    </Button>
  );
};

const makeStyles = ({ color }: { color: string }) =>
  StyleSheet.create({
    link: {
      color,
      fontSize: 10,
      fontWeight: 'bold',
    },
  });

export default Link;
