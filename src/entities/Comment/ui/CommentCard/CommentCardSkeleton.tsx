import { memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './CommentCard.module.scss';
import { UISkeleton } from '@/shared/ui/UISkeleton';
import { ToggleFeatureComponent } from '@/shared/lib/utils/toggleFeature';
import { UICard } from '@/shared/ui/UICard';

interface CommentCardSkeletonProps {
  className?: string;
}

export const CommentCardSkeleton = memo(
  ({ className }: CommentCardSkeletonProps) => (
    <ToggleFeatureComponent
      featureName="isRedesignEnable"
      off={
        <VStack
          className={classNames(styles.CommentCard, [className])}
          gap="16"
        >
          <HStack gap="4" align="center">
            <Skeleton height={32} width={32} borderRadius="50%" />
            <Skeleton width={100} height={24} />
          </HStack>
          <Skeleton width="100%" height={50} />
        </VStack>
      }
      on={
        <UICard className={className} gap="16">
          <HStack gap="4" align="center">
            <UISkeleton height={32} width={32} borderRadius="50%" />
            <UISkeleton width={100} height={24} />
          </HStack>
          <UISkeleton width="100%" height={50} />
        </UICard>
      }
    />
  ),
);
