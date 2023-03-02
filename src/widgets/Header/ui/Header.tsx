import { LangSwitcher } from 'features/LangSwitcher';
import { Navigation } from 'features/Navigation';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <div className={classNames(styles.Header)}>
    <Navigation />
    <LangSwitcher />
  </div>
);
