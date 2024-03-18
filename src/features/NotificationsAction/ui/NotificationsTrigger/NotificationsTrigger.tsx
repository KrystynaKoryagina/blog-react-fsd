import { memo } from 'react';
import { Button, ButtonType } from '@/shared/ui/Button';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import styles from './NotificationsTrigger.module.scss';

interface NotificationsTriggerProps {
  onClick?: () => void;
}

export const NotificationsTrigger = memo(
  ({ onClick }: NotificationsTriggerProps) => (
    <Button
      variant={ButtonType.GHOST}
      className={styles.trigger}
      onClick={onClick}
    >
      <NotificationIcon width={20} height={20} />
    </Button>
  ),
);
