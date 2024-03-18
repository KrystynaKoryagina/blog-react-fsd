import { memo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Text, TextSize } from '@/shared/ui/Text';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
  item: Notification;
}

export const NotificationItem = memo(({ item }: NotificationItemProps) => {
  const ContentJSX = (
    <Card>
      <Text>{item.title}</Text>
      <Text size={TextSize.SM}>{item.description}</Text>
    </Card>
  );

  if (item?.href) {
    return (
      <a target="_blank" href={item.href} rel="noreferrer">
        {ContentJSX}
      </a>
    );
  }

  return ContentJSX;
});
