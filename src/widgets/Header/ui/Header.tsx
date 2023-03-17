import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import styles from './Header.module.scss';

export const Header = () => {
  const { t } = useTranslation();
  const [isLoginModal, setIsLoginModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.Header)}>
        <Button
          className={styles.loginBtn}
          variant={ButtonType.GHOST_INVERTED}
          onClick={logout}
        >
          {t('BUTTONS.LOGOUT')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.Header)}>
      <Button
        className={styles.loginBtn}
        variant={ButtonType.GHOST_INVERTED}
        onClick={() => setIsLoginModal(true)}
      >
        {t('BUTTONS.LOGIN')}
      </Button>
      <LoginModal
        isOpen={isLoginModal}
        onClose={() => setIsLoginModal(false)}
      />
    </div>
  );
};
