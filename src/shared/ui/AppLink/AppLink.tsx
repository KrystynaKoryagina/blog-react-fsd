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
  className?: string;
  // theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  children,
  className,
  // theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => (
  <Link
    to={to}
    className={classNames(styles.AppLink, [className], {
      // [styles.AppLinkPrimary]: theme === AppLinkTheme.PRIMARY,
      // [styles.AppLinkSecondary]: theme === AppLinkTheme.SECONDARY,
    })}
    {...otherProps}
  >
    {children}
  </Link>
);
