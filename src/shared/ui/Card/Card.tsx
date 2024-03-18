import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card = ({ className, children, ...otherProps }: CardProps) => (
  <div className={classNames(styles.Card, [className])} {...otherProps}>
    {children}
  </div>
);
