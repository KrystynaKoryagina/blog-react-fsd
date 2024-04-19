import { memo } from 'react';
import { Button, ButtonType } from '@/shared/ui/deprecated/Button';
import NotificationIconDeprecated from '@/shared/assets/icons/deprecated/notification.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import styles from './NotificationsTrigger.module.scss';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UIButton } from '@/shared/ui/UIButton';

interface NotificationsTriggerProps {
  onClick?: () => void;
}

export const NotificationsTrigger = memo(
  ({ onClick }: NotificationsTriggerProps) => (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      on={
        <UIButton variant="ghost" onClick={onClick}>
          <NotificationIcon width={40} height={40} />
        </UIButton>
      }
      off={
        <Button
          variant={ButtonType.GHOST}
          className={styles.trigger}
          onClick={onClick}
        >
          <NotificationIconDeprecated width={20} height={20} />
        </Button>
      }
    />
  ),
);
