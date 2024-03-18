import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/features/Navigation';
import { classNames } from '@/shared/lib/utils/classNames';
import { Button, ButtonType, ButtonSize } from '@/shared/ui/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './Sidebar.module.scss';
import { getRouteArticleCreate } from '@/shared/constants/routes';
import PlusIcon from '@/shared/assets/icons/plus.svg';
import { getUserAuthData } from '@/entities/User';

export const Sidebar = memo(() => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const authData = useSelector(getUserAuthData);
  const navigate = useNavigate();

  const navigateToArticleCreate = useCallback(() => {
    navigate(getRouteArticleCreate());
  }, [navigate]);

  const onSidebarToggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <aside
      className={classNames(styles.Sidebar, [], {
        [styles.collapsed]: collapsed,
      })}
      data-testid="sidebar"
    >
      <VStack className={classNames(styles.content)}>
        <Navigation className={styles.nav} collapsed={collapsed} />

        {/* TODO for collapse */}
        {authData && (
          <Button
            className={styles.createBtn}
            variant={ButtonType.OUTLINE}
            onClick={navigateToArticleCreate}
          >
            {collapsed && (
              <PlusIcon
                className={styles.createBtnIcon}
                width={24}
                height={24}
              />
            )}
            {!collapsed && (
              <HStack gap="4" justify="center">
                <PlusIcon
                  className={styles.createBtnIcon}
                  width={24}
                  height={24}
                />
                <span className={styles.createBtnText}>
                  {t('CREATE_ARTICLE')}
                </span>
              </HStack>
            )}
          </Button>
        )}

        <Button
          className={styles.toggleBtn}
          variant={ButtonType.GHOST}
          size={ButtonSize.LG}
          onClick={onSidebarToggle}
          data-testid="sidebar-toggle"
        >
          {collapsed ? '>' : '<'}
        </Button>
      </VStack>
    </aside>
  );
});
