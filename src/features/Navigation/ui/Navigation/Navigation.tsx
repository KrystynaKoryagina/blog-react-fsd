import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useUnleashClient } from '@unleash/proxy-client-react';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { getNavigationItems } from '../../model/selectors/getNavigationItem/getNavigationItem';

interface NavigationProps {
  className?: string;
  collapsed: boolean;
}

export const Navigation = memo(({ collapsed, className }: NavigationProps) => {
  const client = useUnleashClient();
  const navigationItems = useSelector(getNavigationItems(client));

  const navigationLinkJSX = useMemo(
    () =>
      navigationItems.map((item) => (
        <NavigationItem key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed, navigationItems],
  );

  return <nav className={className}>{navigationLinkJSX}</nav>;
});
