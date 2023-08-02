import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/utils/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonType } from 'shared/ui/Button';
import styles from './Header.module.scss';

export const Header = memo(() => {
  const { t } = useTranslation();
  const [isLoginModal, setIsLoginModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const logout = useCallback(() => {
    dispatch(userActions.logout());
    setIsLoginModal(false);
  }, [dispatch]);

  const onCloseModal = useCallback(() => {
    setIsLoginModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsLoginModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(styles.Header)}>
        <Button
          className={styles.loginBtn}
          variant={ButtonType.GHOST_INVERTED}
          onClick={logout}
        >
          {t('BUTTONS.LOGOUT')}
        </Button>
      </header>
    );
  }

  return (
    <div className={classNames(styles.Header)}>
      <Button
        className={styles.loginBtn}
        variant={ButtonType.GHOST_INVERTED}
        onClick={onOpenModal}
      >
        {t('BUTTONS.LOGIN')}
      </Button>
      <LoginModal
        isOpen={isLoginModal}
        onClose={onCloseModal}
      />
    </div>
  );
});
