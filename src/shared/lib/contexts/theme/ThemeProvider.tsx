import { ReactNode, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './const/theme';
import { ThemeContextProps } from './types/theme';
// import { useGetJsonSettings } from '@/entities/User';
import { THEME_KEY } from '@/shared/constants/localStorage';

const defaultTheme = (localStorage.getItem(THEME_KEY) as Theme) || Theme.LIGHT; // TODO remove localStorage

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // const { theme: userTheme } = useGetJsonSettings(); // TODO Bad practice to use useGetJsonSettings in theme Providers. Надо разделять зоны ответсвенности. Можно предавать через пропс initialTheme

  const [theme, setTheme] = useState<Theme>(defaultTheme);
  // const [isThemeInited, setIsThemeInited] = useState(false);

  // TODO work not good
  // при обновлении страницы тема меняется

  // useEffect(() => {
  //   // console.log('userTheme', userTheme);
  //   // console.log('isThemeInited', isThemeInited);

  //   setTheme(userTheme);

  //   // if (!isThemeInited) {
  //   //   console.log('userTheme', userTheme);

  //   //   setIsThemeInited(true);
  //   // }
  // }, [userTheme]);

  const themeProps = useMemo<ThemeContextProps>(
    () => ({ theme, setTheme }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
