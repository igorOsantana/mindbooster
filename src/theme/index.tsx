import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#6A61A1',
      notification: '#B58D97',
      error: '#D32F2F',
      text: '#212121',
      border: '#212121',
      activeTab: '#1976D2',
      inactiveTab: '#757575',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#6A61A1',
      notification: '#B58D97',
      error: '#D32F2F',
      text: '#FFFFFF',
      border: '#FFFFFF',
      activeTab: '#4FC3F7',
      inactiveTab: '#FFFFFF',
      background: '#43405e',
    },
  },
};
