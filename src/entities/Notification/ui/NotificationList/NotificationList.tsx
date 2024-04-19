import { memo } from 'react';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { toggleFeature } from '@/shared/lib/utils/toggleFeature';
import { useUnleashClient } from '@unleash/proxy-client-react';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const client = useUnleashClient();

  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 100000,
  });

  if (isLoading) {
    return (
      <VStack gap="8" className={className}>
        <Skeleton width="100%" borderRadius="8px" height="80px" />
        <Skeleton width="100%" borderRadius="8px" height="80px" />
        <Skeleton width="100%" borderRadius="8px" height="80px" />
      </VStack>
    );
  }

  const NotificationItemJSX = data?.map((item) => (
    <NotificationItem key={item.id} item={item} />
  ));

  return (
    <VStack
      gap={toggleFeature({
        featureName: 'isRedesignEnable',
        on: () => '0',
        off: () => '8',
        client,
      })}
      className={className}
    >
      {NotificationItemJSX}
    </VStack>
  );
});
