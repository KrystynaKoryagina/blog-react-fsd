import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/utils/classNames';
import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink = memo(({
  to,
  children,
  className,
  ...otherProps
}: AppLinkProps) => (
  <Link
    to={to}
    className={classNames(styles.AppLink, [className], {
    })}
    {...otherProps}
  >
    {children}
  </Link>
));
