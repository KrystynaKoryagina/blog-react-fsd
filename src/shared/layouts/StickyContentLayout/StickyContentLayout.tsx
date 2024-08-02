import { ReactElement } from 'react';
import styles from './StickyContentLayout.module.scss';
import { classNames } from '@/shared/lib/utils/classNames';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout = ({
  className,
  content,
  left,
  right,
}: StickyContentLayoutProps) => (
  <div className={classNames(styles.StickyContentLayout, [className])}>
    {left && <div className={styles.left}>{left}</div>}
    <div className={styles.content}>{content}</div>
    {right && <div className={styles.right}>{right}</div>}
  </div>
);
