import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Button as ButtonPaper, Text } from 'react-native-paper';

type Props = {
  secondary?: boolean;
} & React.ComponentProps<typeof ButtonPaper>;

const Button: React.FC<Props> = ({
  children,
  style,
  secondary,
  contentStyle,
  ...props
}) => {
  const { colors } = useTheme();

  const buttonStyle = style
    ? { ...styles.button, ...Object(style) }
    : styles.button;

  const buttonContentStyle = contentStyle
    ? { ...styles.button, ...Object(contentStyle) }
    : styles.button;

  const color = secondary ? colors.notification : colors.primary;

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
