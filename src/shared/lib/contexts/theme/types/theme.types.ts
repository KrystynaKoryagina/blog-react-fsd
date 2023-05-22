export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  COLOR = 'color',
}

export interface UseTheme {
  theme: Theme;
  toggleTheme: () => void;
}
