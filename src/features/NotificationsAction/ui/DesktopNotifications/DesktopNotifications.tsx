import { memo } from 'react';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popover';
import { NotificationsTrigger } from '../NotificationsTrigger/NotificationsTrigger';
import styles from './DesktopNotifications.module.scss';

export const DesktopNotifications = memo(() => (
  <Popover
    trigger={<NotificationsTrigger />}
    direction="bottom right"
    className={styles.DesktopNotifications}
    unmount={false}
  >
    <NotificationList className={styles.list} />
  </Popover>
));
