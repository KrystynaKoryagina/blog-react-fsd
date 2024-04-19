import { ButtonHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './Button.module.scss';
import { ButtonSize, ButtonType } from './consts/button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  isActive?: boolean;
}

/**
 * @deprecated Use `UIButton` instead.
 */
export const Button = ({
  variant = ButtonType.SOLID,
  size = ButtonSize.SM,
  children,
  className,
  isActive,
  disabled,
  ...otherProps
}: ButtonProps) => (
  <button
    data-testid="button"
    type="button"
    className={classNames(
      styles.Button,
      [styles[variant], styles[size], className],
      {
        [styles.active]: isActive,
      },
    )}
    disabled={disabled}
    {...otherProps}
  >
    {children}
  </button>
);
