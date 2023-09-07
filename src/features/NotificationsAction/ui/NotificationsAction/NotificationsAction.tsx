import { classNames } from 'shared/lib/utils/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Popover } from 'shared/ui/Popover';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import styles from './NotificationsAction.module.scss';

interface NotificationsActionProps {
  className?: string;
}

export const NotificationsAction = memo(({ className }: NotificationsActionProps) => {
  const { t } = useTranslation();

  return (
    <Popover
      trigger={<NotificationIcon className={styles.trigger} />}
      direction='bottom left'
      className={classNames(styles.NotificationsAction, [className])}
      unmount={false}
    >
      <NotificationList className={styles.list} />
    </Popover>
  );
});
