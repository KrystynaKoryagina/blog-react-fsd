import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UICard.module.scss';
import { CardSize } from './types/card';

interface UICardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  size?: CardSize;
}

export const UICard = ({
  className,
  children,
  size = 'big',
  ...otherProps
}: UICardProps) => (
  <div
    className={classNames(styles.Card, [className, styles[size]])}
    {...otherProps}
  >
    {children}
  </div>
);
