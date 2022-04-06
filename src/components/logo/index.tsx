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
    width: 80,
    height: 80,
  },
  medium: {
    width: 160,
    height: 160,
  },
  large: {
    width: 320,
    height: 320,
  },
});

export default Logo;
