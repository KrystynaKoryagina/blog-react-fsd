import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Text.module.scss';
import { TextType } from './types/Text.types';

interface TextProps {
  className?: string;
  variant?: TextType;
}

export const Text: FC<TextProps> = ({
  children,
  className,
  variant = TextType.PRIMARY,
}) => (
  <p className={classNames(styles.Text, [styles[variant], className])}>{children}</p>
);
