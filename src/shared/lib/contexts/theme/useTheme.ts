import { useContext } from 'react';
// import { THEME_KEY } from '@/shared/constants/localStorage'; // TODO remove
import { ThemeContext } from './ThemeContext';
import { UseTheme } from './types/theme';
import { Theme } from './const/theme';
import { THEME_KEY } from '@/shared/constants/localStorage';

// const defaultTheme = (localStorage.getItem(THEME_KEY) as Theme) || Theme.LIGHT;

// TODO update logic to change theme
// если тема темная, при лог ауте она меняется на светлую. Оставлять ту, что была у юзера

export const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme?.(newTheme);
    saveAction?.(newTheme);

    localStorage.setItem(THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
