import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ButtonPaper, Text } from 'react-native-paper';
import { baseColors } from '../../theme/colors';

type Props = {
  secondary?: boolean;
  success?: boolean;
} & React.ComponentProps<typeof ButtonPaper>;

const Button: React.FC<Props> = ({
  children,
  style,
  secondary,
  success,
  contentStyle,
  ...props
}) => {
  const buttonStyle = style
    ? { ...styles.button, ...Object(style) }
    : styles.button;

  const buttonContentStyle = contentStyle
    ? { ...styles.button, ...Object(contentStyle) }
    : styles.button;

  const color = secondary
    ? baseColors.secondary
    : success
    ? baseColors.success
    : baseColors.primary;

  return (
    <ButtonPaper
      mode="contained"
      style={buttonStyle}
      contentStyle={buttonContentStyle}
      color={color}
      {...props}>
      <Text style={styles.text}>{children}</Text>
    </ButtonPaper>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    padding: 5,
  },
});

export default Button;
