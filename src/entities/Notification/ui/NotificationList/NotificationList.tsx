import { memo } from 'react';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack gap='8' className={className}>
        <Skeleton width='100%' borderRadius='8px' height='80px' />
        <Skeleton width='100%' borderRadius='8px' height='80px' />
        <Skeleton width='100%' borderRadius='8px' height='80px' />
      </VStack>
    );
  }

  const NotificationItemJSX = data?.map((item) => (
    <NotificationItem key={item.id} item={item} />
  ));

  return (
    <VStack gap='8' className={className}>
      {NotificationItemJSX}
    </VStack>
  );
});
