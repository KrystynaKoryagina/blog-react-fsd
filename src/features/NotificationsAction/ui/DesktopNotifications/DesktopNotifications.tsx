import { Fragment, memo } from 'react';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/deprecated/Popover';
import { NotificationsTrigger } from '../NotificationsTrigger/NotificationsTrigger';
import styles from './DesktopNotifications.module.scss';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIPopover } from '@/shared/ui/UIPopover';

export const DesktopNotifications = memo(() => (
  <ToggleFeatureComponent
    featureName="isRedesignEnable"
    on={
      <UIPopover
        trigger={<NotificationsTrigger />}
        triggerAs="div"
        direction="bottom right"
        className={styles.DesktopNotifications}
        unmount={false}
      >
        <NotificationList />
      </UIPopover>
    }
    off={
      <Popover
        trigger={<NotificationsTrigger />}
        direction="bottom right"
        className={styles.DesktopNotifications}
        unmount={false}
      >
        <NotificationList className={styles.list} />
      </Popover>
    }
  />
));
