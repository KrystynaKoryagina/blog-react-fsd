import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './Button.module.scss';
import { ButtonSize, ButtonType } from '../types/button';

{/* TODO 60, 61 Создание и редактирование статей. Pages
Feliche-Demian Netliukh • Вт 02 Май 13:33 • Ответ создан Пн 01 Май 11:11
Привет Тимур, мы в этом уроке баттон обернули в линк, я хотел у тебя спросить как это лучше всего исправить.
Создать отдельный компонент линк, или сделать компонент button аморфным (то есть передавать компонент в который он буде оборачиваться)?
Второй вариант выглядит более костыльным в реализации. Что думаеш?

Тимур Ульби
На самом деле лучше сделать аморфный компонент, мы что то похожее будем позже в Dropdown делать
*/}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  square?: boolean;
}

export const Button = ({
  variant = ButtonType.PRIMARY,
  size = ButtonSize.SM,
  children,
  className,
  square,
  disabled,
  ...otherProps
}: ButtonProps) => (
  <button
    type='button'
    className={classNames(
      styles.Button,
      [styles[variant], styles[size], className],
      {
        [styles.square]: square,
      },
    )}
    disabled={disabled}
    {...otherProps}
  >
    {children}
  </button>
);
