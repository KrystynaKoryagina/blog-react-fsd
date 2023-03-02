import { Story } from '@storybook/react';
import { Theme } from 'shared/lib/contexts/theme/ThemeContext';

/* TODO
А такой вопрос, вот Storybook для ThemeSwitcher всегда берёт SVG из дефолтной темы, на 32:50 можно видеть что фон меняется, а картинка для SVG всегда остаётся одинаковая. Так и надо, или это потом будет поправлено?
Нравится • Подписаться

Тимур Ульби
Можно в ThemeDecorator добавить еще ThemeProvider, тема из стейта берется, поэтому так
*/
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
