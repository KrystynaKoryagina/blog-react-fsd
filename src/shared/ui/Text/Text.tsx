import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './Text.module.scss';
import { TextType, TextSize, TextAlign } from './types/Text';

// TODO storybook for size, align ...

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TextType;
  size?: TextSize;
  align?: TextAlign;
  className?: string
  children: ReactNode
}

export const Text = ({
  children,
  className,
  size = TextSize.MD,
  align = TextAlign.LEFT,
  variant = TextType.PRIMARY,
  ...otherProps
}: TextProps) => (
  <p
    className={
      classNames(styles.Text, [styles[variant], styles[size], styles[align], className])
    }
    {...otherProps}
  >
    {children}
  </p>
);
