import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { baseColors, lightColors, darkColors } from './colors';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...baseColors,
      ...lightColors,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...baseColors,
      ...darkColors,
    },
  },
};
