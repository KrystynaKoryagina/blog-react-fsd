import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export const enum ButtonType {
  GHOST = 'ghost',
  OUTLINE = 'outline',
  PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  classname?: string;
}

export const Button: FC<ButtonProps> = ({
  variant = ButtonType.PRIMARY,
  children,
  classname,
  ...otherProps
}) => (
  <button
    type='button'
    className={classNames(styles.Button, [styles[variant], classname])}
    {...otherProps}
  >
    {children}
  </button>
);
