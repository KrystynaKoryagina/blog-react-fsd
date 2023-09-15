import { ReactNode, useMemo, useState } from 'react';
import { THEME_KEY } from '@/shared/constants/localStorage';
import { ThemeContext } from './ThemeContext';
import { Theme } from './const/theme';
import { ThemeContextProps } from './types/theme';

const defaultTheme = (localStorage.getItem(THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const themeProps = useMemo<ThemeContextProps>(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
