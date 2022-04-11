import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Avatar: React.FC = () => {
  const { colors } = useTheme();
  const styles = makeStyles({ colorText: colors.text });

  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../assets/mock/img/avatar.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Fernando Soares</Text>
    </View>
  );
};

export default Avatar;

type StyleProps = {
  colorText: string;
};

const makeStyles = ({ colorText }: StyleProps) =>
  StyleSheet.create({
    wrapper: {
      padding: 30,
      alignItems: 'center',
    },
    image: {
      width: 150,
      height: 150,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colorText,
      marginTop: 15,
    },
  });
