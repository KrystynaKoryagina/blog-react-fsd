import { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import styles from './ArticleGridView.module.scss';
import { UICard } from '@/shared/ui/UICard';
import { UISkeleton } from '@/shared/ui/UISkeleton';

export const ArticleGridViewSkeleton = memo(() => (
  <UICard className={styles.ArticleGridView} padding="0">
    <UISkeleton className={styles.img} />

    <VStack gap="8">
      <UISkeleton height={72} />

      <VStack className={styles.info} gap="8">
        <UISkeleton height={20} />

        <HStack gap="8" justify="between" align="center">
          <UISkeleton width={100} height={20} />
          <UISkeleton width={80} height={20} />
        </HStack>

        <HStack gap="4" align="center">
          <UISkeleton height={32} width={32} borderRadius="50%" />
          <UISkeleton width={100} height={20} />
        </HStack>
      </VStack>
    </VStack>
  </UICard>
));
