import { memo, ReactElement } from 'react';
import styles from './MainLayout.module.scss';
import { classNames } from '@/shared/lib/utils/classNames';

interface MainLayoutProps {
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  toolbar?: ReactElement;
  className?: string;
}

export const MainLayout = ({
  className,
  content,
  toolbar,
  header,
  sidebar,
}: MainLayoutProps) => {
  return (
    <div className={classNames(styles.MainLayout, [className])}>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.rightbar}>
        <div className={styles.header}>{header}</div>
        <div className={styles.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};
