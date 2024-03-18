import { Theme } from '../const/theme';

export interface UseTheme {
  theme: Theme;
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
