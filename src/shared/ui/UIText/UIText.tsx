import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UIText.module.scss';
import { TextType, TextSize, TextWeight, TextAlign } from '@/shared/types/text';

type TextProps<C extends ElementType> = {
  as?: C;
  variant?: TextType;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

export const UIText = <C extends ElementType>({
  as,
  children,
  className,
  weight = 'regular',
  size = 'md',
  align = 'left',
  variant = 'primary',
  ...otherProps
}: TextProps<C>) => {
  const Component = as || 'div';

  const additionalClasses = [
    styles[variant],
    styles[size],
    styles[align],
    styles[weight],
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
