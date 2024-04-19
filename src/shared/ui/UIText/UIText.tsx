import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UIText.module.scss';
import { TextType, TextSize, TextAlign } from './types/Text';

type TextProps<C extends ElementType> = {
  as?: C;
  variant?: TextType;
  size?: TextSize;
  align?: TextAlign;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

export const UIText = <C extends ElementType>({
  as,
  children,
  className,
  size = 'md',
  align = 'left',
  variant = 'primary',
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
