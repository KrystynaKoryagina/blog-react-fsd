import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/Stack';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { getNavigationItems } from '../../model/selectors/getNavigationItem/getNavigationItem';

interface NavigationProps {
  collapsed: boolean;
}

export const Navigation = memo(({ collapsed }: NavigationProps) => {
  const navigationItems = useSelector(getNavigationItems);

  const navigationLinkJSX = useMemo(
    () => (navigationItems.map((item) => (
      <NavigationItem key={item.path} item={item} collapsed={collapsed} />))),
    [collapsed, navigationItems],
  );

  return (
    <nav>
      <VStack gap='4' align='center'>
        {navigationLinkJSX}
      </VStack>
    </nav>
  );
});
