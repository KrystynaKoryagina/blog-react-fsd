import { ComponentPropsWithoutRef, ElementType } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { ButtonSize, ButtonType } from '../types/button';

export type ButtonProps<C extends ElementType> = {
  as?: C
  variant?: ButtonType;
  size?: ButtonSize;
  square?: boolean;
  href?: string
} & ComponentPropsWithoutRef<C>;

export const Button = <C extends ElementType>({
  as,
  variant = ButtonType.PRIMARY,
  size = ButtonSize.SM,
  children,
  className,
  square,
  disabled,
  href,
  ...otherProps
}: ButtonProps<C>) => {
  if (href) {
    return (
      <Link
        className={classNames(
          styles.Button,
          [styles[variant], styles[size], className],
          {
            [styles.square]: square,
          },
        )}
        disabled={disabled}
        to={href}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const Component = as || 'button';

  return (
    <Component
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
    </Component>
  );
};
