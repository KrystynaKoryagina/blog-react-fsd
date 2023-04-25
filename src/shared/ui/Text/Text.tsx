import { memo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './Text.module.scss';
import { TextType, TextSize, TextAlign } from './types/Text';

// TODO storybook for size, align ...

interface TextProps {
  value?: string;
  variant?: TextType;
  size?: TextSize;
  align?: TextAlign;
  className?: string
}

export const Text = memo(({
  value,
  className,
  size = TextSize.MD,
  align = TextAlign.LEFT,
  variant = TextType.PRIMARY,
}: TextProps) => (
  <p
    className={
      classNames(styles.Text, [styles[variant], styles[size], styles[align], className])
    }
  >
    {value}
  </p>
));
