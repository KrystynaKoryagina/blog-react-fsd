import { memo } from 'react';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect';
import { MobileNotifications } from '../MobileNotifications/MobileNotifications';
import { DesktopNotifications } from '../DesktopNotifications/DesktopNotifications';

const NotificationsAction = () => {
  const { isMobile } = useDeviceDetect();

  return isMobile ? <MobileNotifications /> : <DesktopNotifications />;
};

export default memo(NotificationsAction);
