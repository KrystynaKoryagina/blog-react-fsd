/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonType } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  return (
    <div className={classNames(styles.Header)}>
      <Button
        className={styles.loginBtn}
        variant={ButtonType.GHOST_INVERTED}
        onClick={() => setIsAuthModal(true)}
      >
        {t('BUTTONS.LOGIN')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.
      </Modal>
    </div>
  );
};
