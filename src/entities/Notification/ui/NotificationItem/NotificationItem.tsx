import { memo } from 'react';
import { Card } from '@/shared/ui/deprecated/Card';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { Notification } from '../../model/types/notification';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIText } from '@/shared/ui/UIText';
import { VStack } from '@/shared/ui/Stack';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
  item: Notification;
}

export const NotificationItem = memo(({ item }: NotificationItemProps) => {
  const ContentJSX = (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      on={
        <VStack className={styles.NotificationItem}>
          <UIText>{item.title}</UIText>
          <UIText size="sm" as="p">
            {item.description}
          </UIText>
        </VStack>
      }
      off={
        <Card>
          <Text>{item.title}</Text>
          <Text size={TextSize.SM}>{item.description}</Text>
        </Card>
      }
    />
  );

  if (item?.href) {
    // TODO a or Link ???
    return (
      <a target="_blank" href={item.href} rel="noreferrer">
        {ContentJSX}
      </a>
    );
  }

  return ContentJSX;
});
