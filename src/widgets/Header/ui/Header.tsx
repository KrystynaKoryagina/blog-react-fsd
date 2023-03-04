import { LangSwitcher } from 'features/LangSwitcher';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <div className={classNames(styles.Header)}>
    <LangSwitcher className={styles.langs} />
  </div>
);
