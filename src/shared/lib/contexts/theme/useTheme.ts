import { useContext } from 'react';
import { THEME_KEY } from '@/shared/constants/localStorage';
import { ThemeContext } from './ThemeContext';
import { UseTheme } from './types/theme';
import { Theme } from './const/theme';

export const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme?.(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
