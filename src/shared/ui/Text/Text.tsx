import { memo } from 'react';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './Text.module.scss';
import { TextType } from './types/Text';

interface TextProps {
  value?: string;
  variant?: TextType;
  className?: string
}

export const Text = memo(({
  value,
  className,
  variant = TextType.PRIMARY,
}: TextProps) => (
  <p className={classNames(styles.Text, [styles[variant], className])}>{value}</p>
));
