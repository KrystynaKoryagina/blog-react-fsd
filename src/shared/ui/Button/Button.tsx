import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './Button.module.scss';
import { ButtonSize, ButtonType } from './types/button';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  square?: boolean;
}

export const Button = memo(({
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
));
