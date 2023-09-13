import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { DropdownItem, DropdownMenu } from 'shared/ui/DropdownMenu';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { getUserAuthData, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routes/routes';
import { Avatar } from 'shared/ui/Avatar';
import { getIsAdminPanelAvailable } from '../../model/selectors/getIsAdminPanelAvailable/getIsAdminPanelAvailable';

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
    navigate(RoutePath.MAIN);
  }, [dispatch, navigate]);

  const dropdownItems: DropdownItem[] = useMemo(() => ([
    ...(isAdminPanelAvailable ? [{
      id: 'admin',
      content: t('NAVIGATION.ADMIN_PANEL'),
      href: `${RoutePath.ADMIN_PANEL}`,
    }] : []),
    {
      id: 'profile',
      content: t('NAVIGATION.PROFILE'),
      href: `${RoutePath.PROFILE}/${authData?.id}`,
    },
    {
      id: 'logout',
      content: t('BUTTONS.LOGOUT'),
      onClick: logout,
    },
  ]), [authData?.id, isAdminPanelAvailable, logout, t]);

  return (
    authData
      ? (
        <DropdownMenu
          className={className}
          items={dropdownItems}
          trigger={<Avatar src={authData.avatar} size={30} />}
          direction='bottom right'
        />
      )
      : null
  );
});
