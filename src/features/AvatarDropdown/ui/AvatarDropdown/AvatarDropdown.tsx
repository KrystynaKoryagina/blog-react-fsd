import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { DropdownItem, DropdownMenu } from '@/shared/ui/DropdownMenu';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getUserAuthData, userActions } from '@/entities/User';
import {
  getRouteAdmin,
  getRouteArticles,
  getRouteProfile,
} from '@/shared/constants/routes';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { getIsAdminPanelAvailable } from '../../model/selectors/getIsAdminPanelAvailable/getIsAdminPanelAvailable';
import { Button, ButtonType } from '@/shared/ui/Button';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAdminPanelAvailable = useSelector(getIsAdminPanelAvailable);
  const authData = useSelector(getUserAuthData);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
    navigate(getRouteArticles());
  }, [dispatch, navigate]);

  const dropdownItems: DropdownItem[] = useMemo(
    () => [
      ...(isAdminPanelAvailable
        ? [
            {
              id: 'admin',
              content: t('NAVIGATION.ADMIN_PANEL'),
              href: getRouteAdmin(),
            },
          ]
        : []),
      {
        id: 'profile',
        content: t('NAVIGATION.PROFILE'),
        href: getRouteProfile(authData?.id),
      },
      {
        id: 'logout',
        content: t('BUTTONS.LOGOUT'),
        onClick: logout,
      },
    ],
    [authData?.id, isAdminPanelAvailable, logout, t],
  );

  const menuTrigger = useMemo(
    () => (
      <Button variant={ButtonType.GHOST}>
        <UIAvatar src={authData?.avatar} size={30} />
      </Button>
    ),
    [authData?.avatar],
  );

  return authData ? (
    <DropdownMenu
      className={className}
      items={dropdownItems}
      trigger={menuTrigger}
      direction="bottom right"
    />
  ) : null;
});
