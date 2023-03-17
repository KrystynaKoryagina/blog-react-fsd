import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';
import { ButtonSize, ButtonType } from './types/Button.types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  square?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = ButtonType.PRIMARY,
  size = ButtonSize.SM,
  children,
  className,
  square,
  disabled,
  ...otherProps
}) => (
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
