import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import {
  memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/utils/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routes/routes';
import { HStack } from 'shared/ui/Stack';
import { NotificationsAction } from 'features/NotificationsAction';
import { AvatarDropdown } from 'features/AvatarDropdown';
import styles from './Header.module.scss';

export const Header = memo(() => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const [isLoginModal, setIsLoginModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsLoginModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsLoginModal(true);
  }, []);

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

          <HStack gap='16' align='center'>
            <AvatarDropdown />
            <NotificationsAction />
          </HStack>
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
