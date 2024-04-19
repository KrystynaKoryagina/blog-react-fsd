import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { DropdownMenu } from '@/shared/ui/deprecated/DropdownMenu';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getUserAuthData, userActions } from '@/entities/User';
import {
  getRouteAdmin,
  getRouteArticles,
  getRouteProfile,
} from '@/shared/constants/routes';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { getIsAdminPanelAvailable } from '../../model/selectors/getIsAdminPanelAvailable/getIsAdminPanelAvailable';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIAvatar } from '@/shared/ui/UIAvatar';
import { UIDropdown, DropdownItem } from '@/shared/ui/UIDropdown';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';

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

  return (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      on={
        <UIDropdown
          className={className}
          items={dropdownItems}
          trigger={<UIAvatar src={authData?.avatar} size={40} alt="avatar" />}
          direction="bottom right"
        />
      }
      off={
        <DropdownMenu
          className={className}
          items={dropdownItems}
          trigger={
            <Button variant={ButtonType.GHOST}>
              <UIAvatar src={authData?.avatar} size={30} />
            </Button>
          }
          direction="bottom right"
        />
      }
    />
  );
});
