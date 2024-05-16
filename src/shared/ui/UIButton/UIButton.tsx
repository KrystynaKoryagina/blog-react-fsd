import {
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UIButton.module.scss';
import { ButtonSize, ButtonType } from './types/button';

// TODO fix size for ghost button. Height a bit bigger than icon

type UIButtonProps<C extends ElementType> = {
  as?: C;
  variant?: ButtonType;
  size?: ButtonSize;
  isActive?: boolean;
} & ComponentPropsWithRef<C>;

export const UIButton = forwardRef(
  <C extends ElementType>(props: UIButtonProps<C>, ref: ForwardedRef<C>) => {
    const {
      as,
      children,
      className,
      isActive,
      disabled,
      variant = 'solid',
      size = 'sm',
      ...otherProps
    } = props;
    const Component = as || 'button';

    return (
      <Component
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
        ref={ref}
        {...otherProps}
      >
        {children}
      </Component>
    );
  },
);
