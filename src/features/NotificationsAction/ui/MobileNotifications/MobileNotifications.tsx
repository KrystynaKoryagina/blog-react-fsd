import { memo, useCallback, useState } from 'react';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { NotificationsTrigger } from '../NotificationsTrigger/NotificationsTrigger';

export const MobileNotifications = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <NotificationsTrigger onClick={onOpenDrawer} />
      <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
        <NotificationList />
      </Drawer>
    </>
  );
});
