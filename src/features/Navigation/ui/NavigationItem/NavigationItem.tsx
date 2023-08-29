import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { AppLink } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib/utils/classNames';
import { HStack } from 'shared/ui/Stack';
import { NavigationLink } from '../../model/types/navigation';
import styles from './NavigationItem.module.scss';

interface NavigationItemProps {
  item: NavigationLink
  collapsed: boolean
}

export const NavigationItem: FC<NavigationItemProps> = ({ item, collapsed }) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  if (item?.authOnly && !authData) {
    return null;
  }

  return (
    <AppLink
      className={classNames(styles.navLink, [], {
        [styles.collapsed]: collapsed,
      })}
      to={item.path}
    >
      <HStack gap={collapsed ? '0' : '8'}>
        <item.Icon />
        <span className={styles.navName}>{t(item.text)}</span>
      </HStack>
    </AppLink>
  );
};
