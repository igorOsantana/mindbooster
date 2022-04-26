import { useContext } from 'react';
import { themeContext, ThemeContextProps } from '../../contexts/theme';

const useThemeApp = (): ThemeContextProps => {
  const context = useContext(themeContext);
  const { currentTheme, toggleTheme } = context;
  return {
    currentTheme,
    toggleTheme,
  };
};

export default useThemeApp;
