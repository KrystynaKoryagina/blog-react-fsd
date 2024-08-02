import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '@/features/Navigation';
import { classNames } from '@/shared/lib/utils/classNames';
import { Button, ButtonType, ButtonSize } from '@/shared/ui/deprecated/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './SidebarRedesigned.module.scss';
import { getRouteArticleCreate } from '@/shared/constants/routes';
import PlusIcon from '@/shared/assets/icons/plus.svg';
import { getUserAuthData } from '@/entities/User';
import { UILogo } from '@/shared/ui/UILogo';
import { UIButton } from '@/shared/ui/UIButton';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

export const SidebarRedesigned = memo(() => {
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
    >
      <UILogo size={50} className={styles.logo} />
      <Navigation className={styles.nav} collapsed={collapsed} />
      <UIButton
        className={styles.toggleBtn}
        variant="icon"
        size="lg"
        onClick={onSidebarToggle}
        data-testid="sidebar-toggle"
      >
        <ArrowIcon />
      </UIButton>

      <VStack gap="8" align="center" className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </VStack>
    </aside>
  );
});
