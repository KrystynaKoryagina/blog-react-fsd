import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/utils/classNames';
import { HStack } from '@/shared/ui/Stack';
import { NotificationsAction } from '@/features/NotificationsAction';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import styles from './HeaderRedesigned.module.scss';
import { UIButton } from '@/shared/ui/UIButton';

export const HeaderRedesigned = memo(() => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const [isLoginModal, setIsLoginModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsLoginModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsLoginModal(true);
  }, []);

  return (
    <header className={classNames(styles.Header)}>
      {authData ? (
        <HStack gap="16" align="center">
          <NotificationsAction />
          <AvatarDropdown />
        </HStack>
      ) : (
        <>
          <UIButton className={styles.loginBtn} onClick={onOpenModal}>
            {t('BUTTONS.LOGIN')}
          </UIButton>
          <LoginModal isOpen={isLoginModal} onClose={onCloseModal} />
        </>
      )}
    </header>
  );
});
