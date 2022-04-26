import React, { createContext, useState } from 'react';

export type ThemeContextProps = {
  currentTheme: string;
  toggleTheme: () => void;
};

export const themeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

type Theme = 'light' | 'dark';

const ThemeContext: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <themeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContext;
