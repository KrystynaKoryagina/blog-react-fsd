import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './Text.module.scss';
import { TextType, TextSize, TextAlign } from './consts/Text';

type TextProps<C extends ElementType> = {
  as?: C;
  variant?: TextType;
  size?: TextSize;
  align?: TextAlign;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

/**
 * @deprecated Use `UIText` instead.
 */
export const Text = <C extends ElementType>({
  as,
  children,
  className,
  size = TextSize.MD,
  align = TextAlign.LEFT,
  variant = TextType.PRIMARY,
  ...otherProps
}: TextProps<C>) => {
  const Component = as || 'p';

  const additionalClasses = [
    styles[variant],
    styles[size],
    styles[align],
    className,
  ];

  return (
    <Component
      className={classNames(styles.Text, additionalClasses)}
      {...otherProps}
    >
      {children}
    </Component>
  );
};
