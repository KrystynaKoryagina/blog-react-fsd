import {
  ComponentProps,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UIButton.module.scss';
import { ButtonSize, ButtonType } from './types/button';

// TODO fix size for ghost button. Height a bit bigger than icon
// TODO

type UIButtonProps<C extends ElementType> = {
  as?: C;
  variant?: ButtonType;
  size?: ButtonSize;
  isActive?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
} & ComponentPropsWithRef<C>;

export const UIButton = forwardRef(
  <C extends ElementType>(props: UIButtonProps<C>, ref: ForwardedRef<C>) => {
    // TODO all props are any ?????
    const {
      as,
      children,
      className,
      isActive,
      disabled,
      addonLeft,
      addonRight,
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
            [styles.withAddon]: !!addonLeft || !!addonRight,
          },
        )}
        disabled={disabled}
        ref={ref}
        {...otherProps}
      >
        {addonLeft && <div className={styles.addon}>{addonLeft}</div>}
        {children}
        {addonRight && (
          <div className={`${styles.addon} ${styles.addonRight}`}>
            {addonRight}
          </div>
        )}
      </Component>
    );
  },
);
