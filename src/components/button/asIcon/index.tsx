import React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

type Props = React.ComponentProps<typeof IconButton>;

const ButtonAsIcon: React.FC<Props> = props => {
  return <IconButton style={styles.button} {...props} />;
};

export default ButtonAsIcon;

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },
});
