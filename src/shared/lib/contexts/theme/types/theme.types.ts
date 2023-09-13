export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface UseTheme {
  theme: Theme;
  toggleTheme: () => void;
}
