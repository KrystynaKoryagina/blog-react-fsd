import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import styles from './AppLink.module.scss';

// TODO
// export const enum AppLinkTheme {
//   PRIMARY = "primary",
//   SECONDARY = "secondary,",
// }

interface AppLinkProps extends LinkProps {
  additionClassName?: string;
  // theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  children,
  additionClassName,
  // theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => (
  <Link
    to={to}
    className={classNames(styles.AppLink, [additionClassName], {
      // [styles.AppLinkPrimary]: theme === AppLinkTheme.PRIMARY,
      // [styles.AppLinkSecondary]: theme === AppLinkTheme.SECONDARY,
    })}
    {...otherProps}
  >
    {children}
  </Link>
);
