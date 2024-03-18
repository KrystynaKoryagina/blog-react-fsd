import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUserName';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/utils/classNames';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { NotificationsAction } from '@/features/NotificationsAction';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import styles from './Header.module.scss';
import LogoIcon from '@/shared/assets/icons/logo.svg';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

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

  return (
    <header className={classNames(styles.Header)} data-testid="header">
      <HStack
        className={classNames(styles.headerContent)}
        justify="between"
        align="center"
      >
        <LogoIcon width={36} height={36} />

        <HStack gap="24" align="center">
          <HStack gap="16" align="center">
            <ThemeSwitcher />
            <LangSwitcher />
          </HStack>

          {authData ? (
            <HStack gap="16" align="center">
              <NotificationsAction />
              <AvatarDropdown />
            </HStack>
          ) : (
            <>
              <Button className={styles.loginBtn} onClick={onOpenModal}>
                {t('BUTTONS.LOGIN')}
              </Button>
              <LoginModal isOpen={isLoginModal} onClose={onCloseModal} />
            </>
          )}
        </HStack>
      </HStack>
    </header>
  );
});
