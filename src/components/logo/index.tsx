import React from 'react';
import { StyleSheet, Image } from 'react-native';

export type Props = {
  size?: 'small' | 'medium' | 'large';
};

const Logo: React.FC<Props> = ({ size = 'large' }) => {
  const style = styles[size];

  return (
    <Image source={require('../../assets/icons/logo.png')} style={style} />
  );
};

const styles = StyleSheet.create({
  small: {
    width: 50,
    height: 50,
  },
  medium: {
    width: 150,
    height: 150,
  },
  large: {
    width: 300,
    height: 300,
  },
});

export default Logo;
