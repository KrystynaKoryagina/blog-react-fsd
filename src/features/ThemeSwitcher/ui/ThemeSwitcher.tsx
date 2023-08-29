import { Theme, useTheme } from 'shared/lib/contexts/theme';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonType } from 'shared/ui/Button';
import { memo } from 'react';

/* TODO
Привет! Стоит ли в ThemeSwitcher тащить константу theme из хука useTheme? Ведь тема меняется на уровне стилизации. Если добавится третья тема, то придется править место с иконками и использовать третью иконку. Или это дальше будет отрефакторино?

Как я сделал: Иконки отличаются только цветом и от одной иконки можно избавиться. В единственной иконке во всех тэгах, кроме svg убрать fill. В самом же тэге svg сделать fill="currentColor". И потом в стилизации также создать css переменную для иконки в разных темах, навешать класс на иконку и также будет работать.

Со временем бандл может "разбухать" из за большого кол-ва картинок, если импортить в проект их таким образом. Можно сформировать sprite и подключать картинки отдельным entry, но есть ли какие то другие способы?
Нравится • Подписаться

Тимур Ульби
Бандл разбухает только от используемых иконок и картинок, он также будет разбухать, если использовать спрайты, если я правильно твою идею конеш понял

*/

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={className}
      variant={ButtonType.GHOST}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
});
