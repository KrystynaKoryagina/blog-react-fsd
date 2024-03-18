import { memo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import styles from './ArticleGridView.module.scss';

export const ArticleGridViewSkeleton = memo(() => (
  <Card className={styles.gridCard}>
    <VStack justify="between" className={styles.gridCardContent}>
      <div className={styles.imageWrapper}>
        <Skeleton height={250} className={styles.img} />
      </div>

      <VStack gap="4">
        <Skeleton width={130} height={20} />
        <Skeleton width={100} height={20} />
        <Skeleton height={20} />
      </VStack>
    </VStack>
  </Card>
));
