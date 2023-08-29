import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './AppLink.module.scss';
import { AppLinkType } from '../types/appLink';

interface AppLinkProps extends LinkProps {
  variant?: AppLinkType;
  className?: string;
}

export const AppLink = ({
  variant = AppLinkType.PRIMARY,
  to,
  children,
  className,
  ...otherProps
}: AppLinkProps) => (
  <Link
    to={to}
    className={classNames(styles.AppLink, [styles[variant], className])}
    {...otherProps}
  >
    {children}
  </Link>
);
