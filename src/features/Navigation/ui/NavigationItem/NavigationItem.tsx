import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/utils/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { NavigationLink } from '../../model/types/navigation';
import styles from './NavigationItem.module.scss';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIText } from '@/shared/ui/UIText';

interface NavigationItemProps {
  item: NavigationLink;
  collapsed: boolean;
}

export const NavigationItem = memo(
  ({ item, collapsed }: NavigationItemProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    if (item?.authOnly && !authData) {
      return null;
    }

    return (
      <ToggleFeatureComponent
        featureName="isRedesignEnable"
        on={
          <NavLink
            data-testid="navigation-item"
            className={({ isActive }) =>
              classNames(styles.NavigationItem, [], {
                [styles.active]: isActive,
                [styles.collapsed]: collapsed,
              })
            }
            to={item.path}
          >
            <HStack gap={collapsed ? '0' : '8'} align="center">
              <item.Icon className={styles.icon} width={32} height={32} />
              <UIText className={styles.name} as="span" size="sm">
                {t(item.text)}
              </UIText>
            </HStack>
          </NavLink>
        }
        off={
          <NavLink
            data-testid="navigation-item"
            className={({ isActive }) =>
              classNames(styles.navLink, [], {
                [styles.active]: isActive,
                [styles.collapsed]: collapsed,
              })
            }
            to={item.path}
          >
            <HStack gap={collapsed ? '0' : '8'} align="center">
              <item.Icon className={styles.icon} width={20} height={20} />
              <Text className={styles.name} as="span" size={TextSize.SM}>
                {t(item.text)}
              </Text>
            </HStack>
          </NavLink>
        }
      />
    );
  },
);
