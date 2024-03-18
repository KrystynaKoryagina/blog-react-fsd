import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './UILink.module.scss';

interface UILinkProps extends LinkProps {
  className?: string;
}

export const UILink = ({
  to,
  children,
  className,
  ...otherProps
}: UILinkProps) => (
  <Link
    to={to}
    className={classNames(styles.UILink, [className])}
    {...otherProps}
  >
    {children}
  </Link>
);
