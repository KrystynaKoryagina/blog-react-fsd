import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/utils/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonType } from 'shared/ui/Button';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routes/routes';
import { HStack } from 'shared/ui/Stack';
import styles from './Header.module.scss';
import { DropdownItem, DropdownMenu } from 'shared/ui/DropdownMenu';
import { Avatar } from 'shared/ui/Avatar';
import { getIsAdminPanelAvailable } from '../../model/selectors/getIsAdminPanelAvailable/getIsAdminPanelAvailable';
import { useNavigate } from 'react-router-dom';

export const Header = memo(() => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authData = useSelector(getUserAuthData);
  const isAdminPanelAvailable = useSelector(getIsAdminPanelAvailable);

  const [isLoginModal, setIsLoginModal] = useState(false);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
    setIsLoginModal(false);
    navigate(RoutePath.MAIN);
  }, [dispatch]);

  const onCloseModal = useCallback(() => {
    setIsLoginModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsLoginModal(true);
  }, []);

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
    }
  ]), [isAdminPanelAvailable])

  if (authData) {
    return (
      <header className={classNames(styles.Header)}>
        <HStack
          className={classNames(styles.headerContent)}
          justify='between'
          align='center'
        >
          <AppLink to={RoutePath.ARTICLE_CREATE}>
            {t('CREATE_ARTICLE')}
          </AppLink>

          <DropdownMenu 
            items={dropdownItems} 
            trigger={<Avatar src={authData.avatar} size={30} />} 
            direction='bottom left' 
          />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(styles.Header)}>
      <HStack className={classNames(styles.headerContent)} justify='end'>
        <Button
          className={styles.loginBtn}
          variant={ButtonType.GHOST_INVERTED}
          onClick={onOpenModal}
        >
          {t('BUTTONS.LOGIN')}
        </Button>
      </HStack>

      <LoginModal
        isOpen={isLoginModal}
        onClose={onCloseModal}
      />
    </header>
  );
});
